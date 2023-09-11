import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import logo from "../images/csi-logo.png"
import gqlIcon from "../images/graphql-icon.png"
import saIcon from "../images/software-architecture-icon.png"
import tsIcon from "../images/typescript-icon.png"

// styles
const pageStyles = {
  backgroundColor: "#FFFFFF",
  color: "#232129",
  paddingBottom: '50px',
  paddingTop: '50px',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const h2Styles = {
  fontSize: "18px",
}

const logoStyles = {
  width: "50%",
}

const goalImgContainerStyles = {
  paddingRight: "15px",
}

const goalImgStyles = {
  maxHeight: "100px",
  maxWidth: "100px",
}

const goalStyles = {
  display: "flex",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div id="content">
        <title>Clear Software Co-op Summer 2023 Work Term Report</title>

        <div id="logo-wrapper">
          <img src={logo} style={logoStyles} alt="Clear Software Logo" />
        </div>
        
        <h1 id="heading">Clear Software Co-op Summer 2023 Work Term Report</h1>

        <h2 style={h2Styles}>Introduction</h2>

        <p>My name is Greg French. I&lsquo;m a 5th-year computer science co-op student at the University of Guelph. The following is the final report for my 5th co-op work term, highlighting my experience at Clear Software over the summer of 2023, as well as giving an overview of the goals I had made at the beginning of the term and my progress in achieving them.</p>

        <h2 style={h2Styles}>About Clear Software</h2>

        <p>Clear Software is a software development company based out of Waterloo Ontario. The company builds custom software solutions for clients around the world. The company is fully remote with most employees working from home in and around Southwestern Ontario. The main channel of communication was through Slack. Slack offers the convenience of quickly messaging colleagues for various needs, such as help with a software issue or requesting access to a company resource. The team is always friendly and ready to assist at a moment's notice. Additionally, the team met virtually at the beginning of every week through Google Meet to discuss pending issues and what work needed to be prioritized in the week ahead. Google Meet was also used for individual discussions when voice/video conversations were more efficient for discussing ideas and software features/bugs than solely relying on text.</p>

        <h2 style={h2Styles}>Job Description</h2>

        <p>As a software developer at Clear Software, the bulk of my work came in the form of writing software on the server for the web application that Clear Software was building for McKellar. McKellar is a structured settlement firm conveniently located in Guelph, Ontario. Clear Software was working with McKellar to build out a new web application to help modernize their existing software systems. At the time I joined the company, the project was nearly complete and sprinting head-first toward the finish line, with just a few pieces missing before the first major phase of the project could conclude.</p>

        <p>The first project I was tasked with was recreating the business reports McKellar used to analyze internal data. The idea was to translate these reports from being generated within the old system, to being generated in the new system. This was to be done using parts of the Jaspersoft stack. How it worked was you would write a variant of XML called JRXML (a specific flavour of XML created by Jaspersoft) inside of an IDE called Jaspersoft studio which contained all the information needed to render the report, including embedded SQL queries. You would then upload the JRXML file to a JasperReports server hosted in a Docker container in the cloud. The JasperReports server would also contain a UI that would let users enter parameters through an HTML form that would let them filter for specific data in the report. However, in the end, we found that the process of manually creating the reports one by one using Jaspersoft technology was too slow and not flexible enough for what the client needed. Thus, the project was put on hold until a better solution was developed. The better solution happened to be rendering the reports in Excel spreadsheets using a Node library to automatically create them. This was implemented towards the end of my term with just two weeks remaining, so I got the chance to fully implement a few of the reports before the end of my term.</p>

        <p>After the reporting work was put on hold, I was tasked with working on another big project. The project involved the automatic filling in of structured settlement annuity applications that McKellar uses in conjunction with companies such as BMO, Canada Life, and Sun Life. These applications come in the form of pre-built PDF templates with blank text fields that need to be filled in for each annuity application. This involved using the PDF-Lib library to read in a PDF template, extract the text fields, and fill them in with data from the database. This was a very involved process as it required understanding a complex data model to understand what data is required for each field and what database tables are needed to fill it, as well as the testing of the many different PDF templates that were produced. Each life insurance company had two different annuity application type templates associated with them (one for tort and one for no-fault) and each template had both English and French versions that needed to be accounted for. Overall, while some of the logic got quite complex, I felt it was a beneficial experience as it gave me more experience working with complex data models and gave me the opportunity to get deeper into using TypeScript, one of my 3 goals for the term.</p>

        <p>Another project that I worked on during my time at Clear Software was the automatic updating of TeamWork task lists. TeamWork is a project management platform used by Clear Software to manage each project the company works on. This involves creating tasks within individual task lists that are then assigned to members of the team who have the requisite skill sets to complete them. The project that I worked on involved updating the task list titles to add the total budget, the estimated time to complete all tasks, and the total time taken for each task inside of each task list for a given project. This was done by utilizing the TeamWork API to get all task lists within a project, get all tasks within a task list, and then get all time entries submitted for each task. Node and TypeScript were used for the project to fetch, process, and then update the data through the API. Automated tests and code linting were also used to ensure that the code was both accurate and clean.</p>

        <h2 style={h2Styles}>Goals</h2>

        <p>Around the beginning of my co-op term, I made three 3 different goals that I would work to achieve throughout the term. The following are those goals:</p>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
           <p><img src={tsIcon} style={goalImgStyles} alt="TypeScript Icon" /></p>
          </div>
          <div>
            <p><strong>Get better at TypeScript -</strong> My first goal was to get better at TypeScript. Before starting at Clear Software, I only had a brief experience with the technology, using it as part of an Angular app that my previous co-op employer was using to monitor their larger mobile app. At Clear, I was able to get a much deeper and richer experience with TypeScript, using it in the vast majority of the software I wrote over the term. I really enjoyed the process of adding explicit types to the JavaScript code I wrote. It enabled me to catch potential bugs more quickly and made the development experience overall more enjoyable.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={saIcon} style={goalImgStyles} alt="Software Architecture Icon" /></p>
          </div>
          <div>
            <p><strong>Improve software architecture skills -</strong> My second goal was to improve my software architecture skills. This includes aspects such as OO design, file structure layout, and use of design patterns. I’ve felt this aspect of my abilities grow tremendously as I’ve improved in my use of classes, custom types, and interfaces for OO design. I’ve gotten better at structuring the layout of files to ensure that the right code goes in the right places. Places that make it easy to extend, re-use and build off of in the future. I’ve also improved my use of design patterns, especially when it comes to the factory pattern and its ability to produce objects of different types on the fly when needed.</p>
          </div>
        </div>

        <div style={goalStyles}>
          <div style={goalImgContainerStyles}>
            <p><img src={gqlIcon} style={goalImgStyles} alt="GraphQL Icon" /></p>
          </div>
          <div>
            <p><strong>Learn GraphQL -</strong> My third goal was to learn GraphQL. Since GraphQL is used heavily on the front end, I thought this might be a good opportunity to learn more about the technology and get my feet wet. Unfortunately, since the majority of my work revolved around work on the server, I didn’t get the chance to use GraphQL as much as I would’ve liked. However, I did get an opportunity to read through the GraphQL documentation as well as use GraphQL a little bit during the process of fixing bugs on the front end.</p>
          </div>
        </div>

        <h2 style={h2Styles}>Conclusions</h2>

        <p>In conclusion, over my past co-op work term, I was able to grow tremendously as a developer. Working at Clear Software enabled me to work day in and day out on a multitude of different technologies and platforms, and grow my skills in areas such as TypeScript and software architecture. These skills will be with me for a long time as I continue this journey along this ever-evolving software landscape.</p>

        <h2 style={h2Styles}>Acknowledgments</h2>

        <p>I&lsquo;d like to thank Steve Grinyer for originally hiring me and allowing me the opportunity to work at the company. I’d also like to thank the entire team for being a pleasure to deal with and always willing to help when asked. Thank you.</p>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Clear Software Co-op Summer 2023 Work Term Report</title>
