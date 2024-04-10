import React from 'react';
import Link from 'next/link';
import Feed from '@/components/Feed';

function Home() {
  return (<>

<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container flex flex-col items-center px-4 space-y-4 md:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Capture and Share the World's Moments
          </h1>
          </div>
          <div className='text-center mt-4'>
          <p className="max-w-[600px] text-gray-500 md:text-xl">
            Sign up to see photos and videos from your friends.
          </p>
          </div>
        
      
        <div className="w-full max-w-sm space-y-4 text-center">
         
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By signing up, you agree to our
            <Link className="underline underline-offset-2" href="#">
              Terms, Data Policy
            </Link>
            and
            <Link className="underline underline-offset-2" href="#">
              Cookie Policy
            </Link>
          </p>
        </div>
      </div>
    </section>
   <Feed />
  </>
    
  )
}

export default Home