import React from 'react';

import { makeStyles } from '@material-ui/styles';

import { Typography, Box } from '@material-ui/core';
import CallToAction from '../ui/CallToAction/CallToAction';

import vision from '../../assets/vision.svg';
import consultation from '../../assets/consultationIcon.svg';
import mockup from '../../assets/mockupIcon.svg';
import review from '../../assets/reviewIcon.svg';
import design from '../../assets/designIcon.svg';
import build from '../../assets/buildIcon.svg';
import launch from '../../assets/launchIcon.svg';
import maintain from '../../assets/maintainIcon.svg';
import iterate from '../../assets/iterateIcon.svg';
// import technologyAnimationData from '../../animations/technologyAnimation/data.json';

const useStyles = makeStyles((theme) => ({
  blackText: {
    color: '#000000',
  },
  whiteText: {
    color: '#ffffff',
  },
  bgConsult: {
    backgroundColor: '#b3b3b3',
  },
  bgMockup: {
    backgroundColor: '#FF7373',
  },
  bgReview: {
    backgroundColor: '#39B54A',
  },
  bgDesign: {
    backgroundColor: '#A67C52',
  },
  bgBuild: {
    backgroundColor: '#FBB03B',
  },
  bgLaunch: {
    backgroundColor: '#C1272D',
  },
  bgMaintain: {
    backgroundColor: '#8E45CE',
  },
  bgIterate: {
    backgroundColor: '#29ABE2',
  },
  columnContainerIntro: {
    paddingLeft: '10em',
    paddingRight: '10em',
    paddingTop: '2em',

    display: 'flex',
    flexDirection: 'column',
  },
  rowContainer: {
    display: 'flex',
  },
  halfBox: {
    flex: '1 1 50%',
    maxWidth: '50%',
    justifyContent: 'center',
  },
  rightAlign: {
    textAlign: 'right',
    paddingLeft: '5em',
  },
  centerImage: {
    display: 'flex',
    alignItems: 'center',
  },
  processStep: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '5em',
    minHeight: '50rem',
    display: 'flex',
    flexDirection: 'row',
  },
  processText: {
    flex: '1 1 30%',
    flexShrink: '5 1 30%',
  },
  processImage: {
    flex: '5 1 70%',
    flexShrink: '1 1 70%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maxWidth40: {
    maxWidth: '40rem',
  },
  maxHeight60: {
    maxHeight: '60rem',
  },

  /* ------ Responsiveness ------ */
  [theme.breakpoints.down('md')]: {
    rowContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    halfBox: {
      flex: '1',
      maxWidth: '100%',
    },
    rightAlign: {
      textAlign: 'center',
      paddingLeft: 0,
      paddingTop: '5em',
    },
    processImage: {
      '& img': {
        maxWidth: '30rem',
        maxHeight: '50rem',
      },
    },
    maxWidth40: {
      maxWidth: '30em',
    },
  },
  [theme.breakpoints.down('sm')]: {
    processStep: {
      flexDirection: 'column',
      alignItems: 'center',

      paddingLeft: '2em',
      paddingRight: '2em',
      paddingTop: '2em',
      minHeight: '20rem',
    },
    processImage: {
      padding: '2em',
      '& img': {
        maxWidth: '20rem',
        maxHeight: '40rem',
      },
    },
    maxWidth40: {
      maxWidth: '20em',
    },
  },
}));

// const technologyAnimationOptions = {
//   loop: true,
//   autoplay: true,
//   technologyAnimationData,
//   rendererSettings: {
//     preserveAspectRation: 'xMidYMid slice',
//   },
// };

const RevolutionCssOnly = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.columnContainerIntro}>
        <Typography variant="h2" style={{                fontFamily: 'Pacifico'                }} gutterBottom>
          The Revolution
        </Typography>

        <div className={classes.rowContainer}>
          <Box className={[classes.halfBox, classes.centerImage]}>
            <img src={vision} alt="mountain through binoculars" className={classes.maxWidth40} />
          </Box>

          <Box className={[classes.halfBox, classes.rightAlign]}>
            <Typography variant="h4">Vision</Typography>
            <Typography variant="body1" paragraph>
              The rise of computers, and subsequently the Internet, has completely altered every aspect of human life.
              This has increased our comfort, broadened our connections, and reshaped how we view the world.
            </Typography>
            <Typography variant="body1" paragraph>
              What once was confined to huge rooms and teams of engineers now resides in every single one of our hands.
              Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of
              everything we do.
            </Typography>
            <Typography variant="body1" paragraph>
              We want to help businesses capitalize on the latest and greatest technology. The best way to predict the
              future is to be the one building it, and we want to help guide the world into this next chapter of
              technological expansion, exploration, and innovation.
            </Typography>
            <Typography variant="body1" paragraph>
              By holding ourselves to rigorous standards and pristine quality, we can ensure you have the absolute best
              tools necessary to thrive in this new frontier.
            </Typography>
            <Typography variant="body1" paragraph>
              We see a future where every individual has personalized software custom tailored to their lifestyle,
              culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that goal.
            </Typography>
          </Box>
        </div>

        <div className={classes.rowContainer}>
          <div className={classes.halfBox} style={{ paddingRight: '5em' }}>
            <Typography variant="h4">Technology</Typography>
            <Typography variant="body1" paragraph>
              In 2013, Facebook invented a new way of building websites. This new system, React.js, completely
              revolutionizes the process and practice of website development.
            </Typography>
            <Typography variant="body1" paragraph>
              Instead of chaining together long individual pages, like traditional websites, React websites are built
              with little chunks of code called components. These components are faster, easier to maintain, and are
              easily reused and customized, each serving a singular purpose.
            </Typography>
            <Typography variant="body1" paragraph>
              Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and
              Android apps. Instead of having to master two completely separate development platforms, you can leverage
              the knowledge you already possessed from building websites and reapply it directly! This was a huge leap
              forward.
            </Typography>
            <Typography variant="body1" paragraph>
              This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla,
              UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.
            </Typography>
            <Typography variant="body1" paragraph>
              Developers have since built on top of these systems by automating project setup and deployment, allowing
              creators to focus as much as possible on their work itself.
            </Typography>
            <Typography variant="body1" paragraph>
              These technical advancements translate into savings by significantly reducing the workload and
              streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry
              for mobile app development.
            </Typography>
            <Typography variant="body1" paragraph>
              This puts personalization in your pocket — faster, better, and more affordable than ever before.{' '}
            </Typography>
          </div>

          <Box className={[classes.halfBox, classes.centerImage]}>
            <Typography variant="body1">[broken animation]</Typography>
            {/* <Lottie options={technologyAnimationOptions} style={{ maxWidth: '40em', margin: 0 }} /> */}
          </Box>
        </div>

        <div style={{ padding: '5em', textAlign: 'center' }}>
          <Typography variant="h4">Process</Typography>
        </div>
      </Box>

      <Box component="div" className={[classes.processStep, classes.bgConsult]}>
        <Box className={classes.processText}>
          <Typography variant="h4" gutterBottom className={classes.blackText}>
            Consultation
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Our process begins the moment you realize you need a piece of technology for your business. Whether you
            already have an idea for where to start and what to do, or if you just know you want to step things up, our
            initial consultation will help you examine your business holistically to find the best solutions.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Detailed notes will be taken on your requirements and constraints, while taking care to identify other
            potential areas for consideration.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Cutting-edge advancements in machine learning like object detection and natural language processing allow
            computers to do things previously unimaginable, and our expertise and intuition will help usher you into
            this new future of possibilities.
          </Typography>
        </Box>
        <Box className={classes.processImage}>
          <img src={consultation} alt="seal the deal by shaking hands"></img>
        </Box>
      </Box>

      <Box component="div" className={[classes.processStep, classes.bgMockup]}>
        <Box className={classes.processText}>
          <Typography variant="h4" gutterBottom className={classes.blackText}>
            Mockup
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            After we settle on the best path forward and decide on a solution to pursue, details like the cost and
            timeline will be finalized.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which
            doesn’t include colors, images, or any other polished design elements, but captures the essential layout
            structure and functionality.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            This helps us understand and refine the solution itself before getting distracted by specifics and looks.{' '}
          </Typography>
        </Box>
        <Box className={classes.processImage}>
          <img src={mockup} alt="computer screen" className={classes.maxWidth40}></img>
        </Box>
      </Box>

      <Box component="div" className={[classes.processStep, classes.bgReview]}>
        <Box className={classes.processText}>
          <Typography variant="h4" gutterBottom className={classes.blackText}>
            Review
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any
            changes you may want or any ideas you may have come up with before any heavy lifting has been done.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went
            into each screen and every anticipated feature.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty,
            fine-details of design.{' '}
          </Typography>
        </Box>
        <Box className={classes.processImage}>
          <img src={review} alt="magnifying glass" className={classes.maxWidth40}></img>
        </Box>
      </Box>

      <Box component="div" className={[classes.processStep, classes.bgDesign]}>
        <Box className={classes.processText}>
          <Typography variant="h4" gutterBottom className={classes.blackText}>
            Design
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Using the mockups and notes taken during the consultation as guides, we will start ironing out what the
            final product will look like. This also involves using any brand material like fonts, colors, and logos to
            extend the experience you’re already familiar with.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            No aspect is superfluous, and care will be taken with every decision.
          </Typography>
        </Box>
        <Box className={classes.processImage}>
          <img src={design} alt="paint brush leaving a stroke of paint" className={classes.maxWidth40}></img>
        </Box>
      </Box>

      <Box component="div" className={[classes.processStep, classes.bgReview]}>
        <Box className={classes.processText}>
          <Typography variant="h4" gutterBottom className={classes.blackText}>
            Review
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any
            changes you may want or any ideas you may have come up with before any heavy lifting has been done.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went
            into each screen and every anticipated feature.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty,
            fine-details of design.
          </Typography>
        </Box>
        <Box className={classes.processImage}>
          <img src={review} alt="magnifying glass"></img>
        </Box>
      </Box>

      <Box component="div" className={[classes.processStep, classes.bgBuild]}>
        <Box className={classes.processText}>
          <Typography variant="h4" gutterBottom className={classes.blackText}>
            Build
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Engineering begins after your approval on the final designs. We start by scaffolding out the project on a
            high level, prioritizing some areas over others.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Each area is then developed in order of importance until ready to be connected to the next piece.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee
            compatibility with all intended devices.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Only after our rigorous examinations will we accept a product as finished, then pushing it through the
            production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready
            for deployment.{' '}
          </Typography>
        </Box>
        <Box className={classes.processImage}>
          <img src={build} alt="building being constructed" className={classes.maxWidth40}></img>
        </Box>
      </Box>

      <Box component="div" className={[classes.processStep, classes.bgLaunch]}>
        <Box className={classes.processText}>
          <Typography variant="h4" gutterBottom className={classes.blackText}>
            Launch
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            The moment we’ve all been waiting for.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show
            off your shiny new software in the wild so you know exactly how it will look to your users.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            When you say the word, we press the button and launch your project out to the public. We’re there to ensure
            everything goes to plan so you can start reaping the rewards of your technological investment immediately.{' '}
          </Typography>
        </Box>
        <Box className={classes.processImage}>
          <img src={launch} alt="rocket ready for liftoff" className={classes.maxHeight60} />
        </Box>
      </Box>

      <Box component="div" className={[classes.processStep, classes.bgMaintain]}>
        <Box className={classes.processText}>
          <Typography variant="h4" gutterBottom className={classes.blackText}>
            Maintain
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Our work doesn’t end there.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            After a successful launch we keep in close contact to listen to feedback and hear how the project is being
            received.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            From there on out we make sure your application is kept up to date and taking advantage of the best features
            and practices available. When new developments arise or new techniques are discovered in future projects, we
            will implement those advancements in your project as part of our routine maintenance.{' '}
          </Typography>
        </Box>
        <Box className={classes.processImage}>
          <img src={maintain} alt="wrench and nuts" className={classes.maxHeight60} />
        </Box>
      </Box>

      <Box component="div" className={[classes.processStep, classes.bgIterate]}>
        <Box className={classes.processText}>
          <Typography variant="h4" gutterBottom className={classes.blackText}>
            Iterate
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a
            brand new system entirely.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            By planning for future features and changes we can build and evolve your application over time. As new use
            cases and customer needs develop we can respond with continuous integration of new content.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Our iterative process will keep you current and competitive, allowing you to quickly implement changes
            instead of waiting months for a single update.{' '}
          </Typography>
        </Box>
        <Box className={classes.processImage}>
          <img src={iterate} alt="dominoes" className={classes.maxWidth40} />
        </Box>
      </Box>

      <CallToAction />
    </>
  );
};

export default RevolutionCssOnly;
