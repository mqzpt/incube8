## Meet Incube8, a platform aimed to help student startups build equity at any scale!
![](https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/483/659/datas/medium.png)
## Inspiration
Why should a company need to be big to IPO? What about student startups who need to raise equity quickly? The space of investing in startups to this day is quite limited, as the opportunities tend to only be available to those in the know. We aim to let any startup raise equity at any valuation they seem fit, opening the potential investor pool to literally anyone with a crypto wallet and internet access. 
## What it does
Incube8 is a full-stack react application integrated directly into the blockchain. It's currently functionality allows one to connect to a metamask wallet directly through a pop-up and either create a pitch for a startup to find investors, or invest in a startup on the site. 
## How we built it
Starting off by writing a smart contract in solidity, we then created a React project with a nice looking front-end using TailwindCSS, and were able to interact with our contract through web3.js, now called thirdweb. 
## Challenges we ran into
As beginners to web3 development, we ran into a ton of problems, which allowed us to learn a lot! Firstly, there were quite a few issues with connecting our web app to the blockchain, but most of them were able to be fixed by using thirdweb (web3.js) to interact with the blockchain through javascript on their platform. Another issue we are coming across is the speed of interacting with the blockchain. Although our application is nowhere near perfect, we are proud to have learned so much in the short time frame!
## Accomplishments that we're proud of
We are proud to have created a full-stack app that actually connects to the blockchain! As beginners with basically no blockchain experience this was a great accomplishment for us!
## What we learned
We learned that blockchain integration isn't as scary and confusing as it may seem, and there does appear to be lots of great documentation on the subject.
## What's next for Incube8
The next step for this project would be to figure out a way to allow tokenized equity of a company or their assets. This is particularly hard as there a number of factors consider, some of which include investor fraud, dilution risk, and how to securely integrate multiple chains into the same app (Axelar looks like a good solution here but we didn't make it that far). There should also be more features on the app, such as a way to connect with other startup founders, and perhaps even a way for startup creators to host presentations on their products on services. 
## Testing
Using vite for local env. Install dependencies with npm install, and use npm run dev to load local host. Message or email for help if needed!
