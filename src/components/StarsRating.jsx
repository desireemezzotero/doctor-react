function StarsRating({ ratingVote }) {

   const stars = [];
   const fullStars = Math.floor(ratingVote);
   const hasHalfStar = ratingVote % 1 > 0 && ratingVote % 1 <= 0.5;

   for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
         // Stelle piene
         stars.push(
            <svg key={i} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
         );
      } else if (i === fullStars && hasHalfStar) {
         // Stelle mezze
         stars.push(
            <svg key={i} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <defs>
                  <linearGradient id={`half-star-${i}`} x1="0" x2="1" y1="0" y2="0">
                     <stop offset="50%" stopColor="currentColor" />
                     <stop offset="50%" stopColor="gray" />
                  </linearGradient>
               </defs>
               <path fill={`url(#half-star-${i})`} d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
         );
      } else {
         // Stelle vuote
         stars.push(
            <svg key={i} className="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
               <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
         );
      }
   }

   return (
      <>
         <div className="flex">
            <div className="flex">
               {stars}
            </div>
            {ratingVote == null ? null :<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{ratingVote}</span> }
         </div>
      </>
   )
}

export default StarsRating


