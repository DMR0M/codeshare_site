import type { PageLoad } from "./$types";
// import { MongoClient } from 'mongodb';

export const load = (() => {
    // you can get this data from ANY SOURCE
    // fetch call here
    // graphql client
    // manually change this object here whenever you want

    return {
        snippets: [
            {
                title: 'Determine if number is PRIME',
                language: 'typescript',
                code: `const isPrime = (num: number): boolean => {
    let factors: number = 0;
                
    for (let n = 1; n < num; n++) {
        num % n === 0 ? factors += 1 : factors;
    }
                
    return factors <= 2;
}
                `,
                favorite: false,
            },
            {
                title: 'Determine if number is PRIME',
                language: 'python',
                code: `def is_prime(num: int) -> bool:\n    factors = 0\n\n    for n in range(1, num+1):\n        if num % n == 0:\n            factors += 1\n\n    return factors <= 2`,
                favorite: false,
            },
            {
                title: 'RR Code Snippet',
                language: 'html',
                code: `<div>This is a div</div>`,
                favorite: false,
            },
            {
                title: 'RR Code Snippet',
                language: 'typescript',
                code: `console.log('Hello TypeScript!')`,
                favorite: false,
            }
        ]
    }
}) satisfies PageLoad;  // PageLoad -> PageData (in our frontend)
