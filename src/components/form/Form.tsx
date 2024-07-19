'use client';

export const Form = () => {
  return (
    <form className='px-8 py-10' onSubmit={(e) => e.preventDefault()}>
      <div className='mb-6'>
        <h3 className='text-lg font-semibold text-sky-950 dark:text-blue-100'>Send a message</h3>
      </div>
      <div className='relative z-0 mb-5 w-full'>
        <input
          type='email'
          name='email'
          className='peer block w-full border-0 border-b-2 border-gray-300 bg-transparent px-2 py-3 text-sm text-sky-950 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-blue-100 dark:focus:border-blue-500'
          placeholder=' '
          required
          data-testid='input-email'
        />
        <label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4'>
          Email address
        </label>
      </div>
      <div className='relative z-0 mb-5 w-full'>
        <input
          type='text'
          name='fullname'
          className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-2 py-3 text-sm text-sky-950 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-blue-100 dark:focus:border-blue-500'
          placeholder=' '
          required
          data-testid='input-fullname'
        />
        <label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4'>
          Fullname
        </label>
      </div>
      <div className='relative z-0 mb-5 w-full'>
        <input
          type='tel'
          name='phone'
          className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-2 py-3 text-sm text-sky-950 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-blue-100 dark:focus:border-blue-500'
          placeholder=' '
          required
          data-testid='input-phone'
        />
        <label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4'>
          Phone number
        </label>
      </div>

      <div className='relative z-0 mb-5 w-full'>
        <textarea
          name='message'
          className='peer block w-full resize-none appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-2 py-3 text-sm text-sky-950 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-blue-100 dark:focus:border-blue-500'
          placeholder=' '
          required
          rows={8}
          data-testid='input-message'
        />
        <label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:translate-x-1/4'>
          Your message
        </label>
      </div>
      <button
        type='submit'
        className='w-full rounded-lg bg-blue-900 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
        data-testid='submit-button'
      >
        Submit
      </button>
    </form>
  );
};
