/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import { RouteContext } from '../../Contexts/RouteContext';
import { ViewportContext } from '../../Contexts/ViewportContext';

import { makeStyles } from '@material-ui/styles';

import { Typography, Grid } from '@material-ui/core';

import vision from '../../assets/vision.svg';
import consultation from '../../assets/consultationIcon.svg';
import mockup from '../../assets/mockupIcon.svg';
import design from '../../assets/designIcon.svg';
import build from '../../assets/buildIcon.svg';
import launch from '../../assets/launchIcon.svg';
import maintain from '../../assets/maintainIcon.svg';
import iterate from '../../assets/iterateIcon.svg';
import technologyAnimationData from '../../animations/technologyAnimation/data.json';

import RevolutionReview from './Sections/RevolutionReview';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: '10em',
    paddingRight: '10em',
    paddingTop: '2em',
    // paddingBottom: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
      paddingTop: '1em',
    },
  },
  wideContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '5em',
    // paddingBottom: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
      paddingTop: '1em',
    },
  },
  rowItemMarginTop: {
    marginTop: '5em',
  },
  rightParagraphContainer: {
    maxWidth: '40em',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      marginTop: '1.25em',
      textAlign: 'center',
    },
  },
  leftParagraphContainer: {
    maxWidth: '40em',
    [theme.breakpoints.down('md')]: {
      marginTop: '1.25em',
      textAlign: 'center',
    },
  },
  narrowParagraph: {
    maxWidth: '30em',
  },
  blackText: {
    color: '#000000',
  },
  whiteText: {
    color: '#ffffff',
  },
  backgroundConsult: {
    backgroundColor: '#b3b3b3',
  },
  backgroundMockup: {
    backgroundColor: '#b3b3b3',
  },
  backgroundReview: {
    backgroundColor: '#b3b3b3',
  },
  backgroundDesign: {
    backgroundColor: '#b3b3b3',
  },
  backgroundBuild: {
    backgroundColor: '#b3b3b3',
  },
  backgroundLaunch: {
    backgroundColor: '#b3b3b3',
  },
  backgroundMaintain: {
    backgroundColor: '#b3b3b3',
  },
  backgroundIterate: {
    backgroundColor: '#b3b3b3',
  },
}));

const Revolution = () => {
  const classes = useStyles();

  const technologyAnimationOptions = {
    loop: true,
    autoplay: true,
    technologyAnimationData,
    rendererSettings: {
      preserveAspectRation: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          <Typography variant="h3">The Revolution</Typography>
        </Grid>

        <Grid item container direction="row" alignItems="center" className={classes.rowItemMarginTop}>
          <Grid item lg>
            <img src={vision} alt="mountain through binoculars" style={{ maxWidth: '40em', marginRight: '5em' }} />
          </Grid>
          <Grid item lg className={classes.rightParagraphContainer}>
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
          </Grid>
        </Grid>

        <Grid item container direction="row" alignItems="center" className={classes.rowItemMarginTop}>
          <Grid item lg className={classes.leftParagraphContainer}>
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
              This puts personalization in your pocket — faster, better, and more affordable than ever before.
            </Typography>
          </Grid>
          <Grid item container lg justify="flex-end">
            <Typography>Supposed to be an animation but doesn't work</Typography>
            <Lottie options={technologyAnimationOptions} style={{ maxWidth: '40em', margin: 0 }} />
          </Grid>
        </Grid>

        {/* ----- START OF PROCESS BLOCKS ----- */}

        <Grid
          item
          container
          direction="row"
          justify="center"
          className={classes.rowItemMarginTop}
          style={{ marginBottom: '5em' }}
        >
          <Grid item>
            <Typography variant="h4">Process</Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* ----- CONSULTATION BLOCK ----- */}

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={[classes.wideContainer, classes.backgroundConsult]}
        style={{ marginTop: 0 }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom className={classes.blackText}>
              Consultation
            </Typography>
          </Grid>
          <Grid item className={classes.narrowParagraph}>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              Our process begins the moment you realize you need a piece of technology for your business. Whether you
              already have an idea for where to start and what to do, or if you just know you want to step things up,
              our initial consultation will help you examine your business holistically to find the best solutions.
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
          </Grid>
        </Grid>
        <Grid item lg>
          <img src={consultation} alt="shaking hands" />
        </Grid>
      </Grid>

      {/* ----- MOCKUP BLOCK ----- */}

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={[classes.wideContainer, classes.backgroundMockup]}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom className={classes.blackText}>
              Mockup
            </Typography>
          </Grid>
          <Grid item className={classes.narrowParagraph}>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              After we settle on the best path forward and decide on a solution to pursue, details like the cost and
              timeline will be finalized.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup,
              which doesn’t include colors, images, or any other polished design elements, but captures the essential
              layout structure and functionality.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              This helps us understand and refine the solution itself before getting distracted by specifics and looks.{' '}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={mockup} alt="computer screen with mockup" />
        </Grid>
      </Grid>

      {/* ----- REVIEW BLOCK ----- */}

      <RevolutionReview classes={classes} />

      {/* ----- DESIGN BLOCK ----- */}

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={[classes.wideContainer, classes.backgroundDesign]}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom className={classes.blackText}>
              Design
            </Typography>
          </Grid>
          <Grid item className={classes.narrowParagraph}>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              Using the mockups and notes taken during the consultation as guides, we will start ironing out what the
              final product will look like. This also involves using any brand material like fonts, colors, and logos to
              extend the experience you’re already familiar with.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              No aspect is superfluous, and care will be taken with every decision.{' '}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={design} alt="paintbrush leaving a stroke of paint" />
        </Grid>
      </Grid>

      {/* ----- REVIEW BLOCK ----- */}

      <RevolutionReview classes={classes} />

      {/* ----- BUILD BLOCK ----- */}

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={[classes.wideContainer, classes.backgroundBuild]}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom className={classes.blackText}>
              Build
            </Typography>
          </Grid>
          <Grid item className={classes.narrowParagraph}>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              Here’s where we get down to business.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              Engineering begins after your approval on the final designs. We start by scaffolding out the project on a
              high level, prioritizing some areas over others.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              Each area is then developed in order of importance until ready to be connected to the next piece.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              Typically the backend, behind the scenes operations are completed first. Once all the services are in
              place we can then create the front end, user side of things.
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
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={build} alt="building all the things" />
        </Grid>
      </Grid>

      {/* ----- LAUNCH BLOCK ----- */}

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={[classes.wideContainer, classes.backgroundLaunch]}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom className={classes.blackText}>
              Launch
            </Typography>
          </Grid>
          <Grid item className={classes.narrowParagraph}>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              The moment we’ve all been waiting for.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              When construction comes to a close you’re the first one to know. We’ll give our final demonstration to
              show off your shiny new software in the wild so you know exactly how it will look to your users.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              When you say the word, we press the button and launch your project out to the public. We’re there to
              ensure everything goes to plan so you can start reaping the rewards of your technological investment
              immediately.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={launch} alt="rocket ready for takeoff" />
        </Grid>
      </Grid>

      {/* ----- MAINTAIN BLOCK ----- */}

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={[classes.wideContainer, classes.backgroundMaintain]}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom className={classes.blackText}>
              Maintain
            </Typography>
          </Grid>
          <Grid item className={classes.narrowParagraph}>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              Our work doesn’t end there.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              After a successful launch we keep in close contact to listen to feedback and hear how the project is being
              received.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              From there on out we make sure your application is kept up to date and taking advantage of the best
              features and practices available. When new developments arise or new techniques are discovered in future
              projects, we will implement those advancements in your project as part of our routine maintenance.{' '}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={maintain} alt="wrench" />
        </Grid>
      </Grid>

      {/* ----- ITERATE BLOCK ----- */}

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={[classes.wideContainer, classes.backgroundIterate]}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography variant="h4" gutterBottom className={classes.blackText}>
              Iterate
            </Typography>
          </Grid>
          <Grid item className={classes.narrowParagraph}>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              The cycle repeats whenever you come up with a new idea for extending your current project, or come up with
              a brand new system entirely.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              By planning for future features and changes we can build and evolve your application over time. As new use
              cases and customer needs develop we can respond with continuous integration of new content.
            </Typography>
            <Typography variant="body1" paragraph className={classes.whiteText}>
              Our iterative process will keep you current and competitive, allowing you to quickly implement changes
              instead of waiting months for a single update.{' '}
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: 'center' }}>
          <img src={iterate} alt="dominoes" />
        </Grid>
      </Grid>
    </>
  );
};

export default Revolution;
