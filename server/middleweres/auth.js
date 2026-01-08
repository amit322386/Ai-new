import { clerkClient } from "@clerk/express";
// Middlewere to check user plan



export const auth = async(req,res,next) =>{
    try {
        const {userId,has} = await req.auth();
        const hasPremiumPlan = await has({plan: 'premium'});

        const user = await clerkClient.users.getUser(userId);

        if(!hasPremiumPlan && user.privateMetadata.free_uses){
            req.free_uses = user.privateMetadata.free_uses;
        }else{
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_uses: 0
                }
            })
            req.free_uses = 0;
        }
        req.plan = hasPremiumPlan ? 'premium' : 'free';
        next();
        
    } catch (error) {
        res.json({success:false, message: error.message});
    }

}