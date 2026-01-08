

export const generateArticle = async (req,res)=>{
   try {
    const {userId} = req.auth();
    const {prompt , length} = req.body;
    const plan = req.plan;
    const free_uses = req.free_uses;

    if(plan !== 'premium' && free_usage >= 10 ){
        return res({success:false , message: 'Free usage limit exceeded. Please upgrade to premium plan.'});
    }
   } catch (error) {
    
   }
}