import { Image, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

const Generatedimages = () => {
  const imageStyle = [
    'Realistic',
    'Ghibli style',
    'Anime style',
    'Cartoon style',
    'Fantasy style',
    'Food',
    'Realistic style',
  ];

  const [selectedStyle, setSelectedStyle] = useState('Realistic');
  const [input, setInput] = useState('');
  const [published, setPublished] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(input, selectedStyle);
  };

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      
      {/* Left Column */}
      <form
        onSubmit={onSubmitHandler}
        className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'
      >
        <div className='flex items-center gap-2'>
          <Sparkles className='w-6 text-purple-600' />
          <h1 className='text-xl font-semibold'>AI Image Generator</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Describe your Image</p>

        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          rows={4}
          className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300'
          placeholder='Describe what you want to see in your images'
          required
        />

        <p className='mt-4 text-sm font-medium'>Style</p>

        <div className='mt-3 flex gap-3 flex-wrap sm:max-w-full'>
          {imageStyle.map((item) => (
            <span
              key={item}
              onClick={() => setSelectedStyle(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedStyle === item
                  ? 'bg-purple-50 text-purple-700'
                  : 'text-gray-500 border-gray-300'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className='my-6 flex item-center gap-2'>
           <label className='relative cursor-pointer'>
            <input type="checkbox" onChange={(e)=>setPublished(e.target.checked)} 
            checked={published} className='sr-only peer' />
            <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500'></div>
            <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:transition-x-4'>

            </span>
           </label>
           <p className='text-sm'>Make this image public</p>
        </div>

        <button
          type='submit'
          className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-2 mt-6 text-sm rounded-lg'
        >
          <Image className='w-5' />
          Generate Image
        </button>
      </form>

      {/* Right Column */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96'>
        <div className='flex items-center gap-3'>
          <Image className='w-5 h-5 text-green-600' />
          <h1 className='text-xl font-semibold'>Generated Images</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Image className='w-9 h-9' />
            <p>Enter a topic and click "Generate Image"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generatedimages;
