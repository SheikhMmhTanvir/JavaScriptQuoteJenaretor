let btn =document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "The best way to find yourself is to lose yourself in the service of others.",
        person: "Mahatma Gandhi",
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        person: "Albert Einstein",
    },
    {
        quote: "At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
        person: "Aristotle",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        person: "Steve Jobs",
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        person: "Albert Einstein",
    },
    {
        quote: "Do what you can, with what you have, where you are.",
        person: "Theodore Roosevelt",
    },
    {
        quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        person: "Charles Darwin",
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        person: "Dalai Lama",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill",
    },
    {
        quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        person: "Buddha",
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt",
    },
    {
        quote: "To handle yourself, use your head; to handle others, use your heart.",
        person: "Eleanor Roosevelt",
    },
    {
        quote: "It always seems impossible until it's done.",
        person: "Nelson Mandela",
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs",
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        person: "Zig Ziglar",
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        person: "Charles R. Swindoll",
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        person: "Thomas Edison",
    },
    {
        quote: "The purpose of our lives is to be happy.",
        person: "Dalai Lama",
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky",
    },
    {
        quote: "Whether you think you can or you think you can't, you're right.",
        person: "Henry Ford",
    },
    {
        quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        person: "Vince Lombardi",
    },
    {
        quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        person: "Jimmy Dean",
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        person: "Helen Keller",
    },
    {
        quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        person: "Walt Whitman",
    },
    {
        quote: "We may encounter many defeats but we must not be defeated.",
        person: "Maya Angelou",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        person: "Sam Levenson",
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt",
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        person: "Oprah Winfrey",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon",
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        person: "Mother Teresa",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        person: "Franklin D. Roosevelt",
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        person: "Margaret Mead",
    },
    {
        quote: "The best preparation for tomorrow is doing your best today.",
        person: "H. Jackson Brown, Jr.",
    },
    {
        quote: "The secret of getting ahead is getting started.",
        person: "Mark Twain",
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        person: "Lao Tzu",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        person: "Mae West",
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        person: "Ralph Waldo Emerson",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        person: "Robert Frost",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        person: "Mark Twain",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        person: "Oscar Wilde",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        person: "Henry David Thoreau",
    },
    {
        quote: "Opportunities don't happen. You create them.",
        person: "Chris Grosser",
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        person: "John D. Rockefeller",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        person: "Thomas Jefferson",
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        person: "Vidal Sassoon",
    },
];


btn.addEventListener('click', function(){
    let random =Math.floor(Math.random() * quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})