"use strict";(self.webpackChunkclear_software_coop_work_term_report=self.webpackChunkclear_software_coop_work_term_report||[]).push([[691],{8294:function(A,e,t){t.r(e),t.d(e,{Head:function(){return f},default:function(){return h}});var a=t(7294),o=t.p+"static/csi-logo-760d8e4e98aa4659b912d28dca0c17ca.png",n=t.p+"static/graphql-icon-aeaf34bbaeb405d851dbc2f2fd0c7c80.png",r=t.p+"static/software-architecture-icon-2ddea27d01eb38805f45914e7c552d0f.png";const i={backgroundColor:"#FFFFFF",color:"#232129",paddingBottom:"50px",paddingTop:"50px",fontFamily:"-apple-system, Roboto, sans-serif, serif"},s={fontSize:"18px"},l={width:"50%"},c={paddingRight:"15px"},d={maxHeight:"100px",maxWidth:"100px"},g={display:"flex"};var h=()=>a.createElement("main",{style:i},a.createElement("div",{id:"content"},a.createElement("title",null,"Clear Software Co-op Summer 2023 Work Term Report"),a.createElement("div",{id:"logo-wrapper"},a.createElement("img",{src:o,style:l,alt:"Clear Software Logo"})),a.createElement("h1",{id:"heading"},"Clear Software Co-op Summer 2023 Work Term Report"),a.createElement("h2",{style:s},"Introduction"),a.createElement("p",null,"My name is Greg French. I‘m a 5th-year computer science co-op student at the University of Guelph. The following is the final report for my 5th co-op work term, highlighting my experience at Clear Software over the summer of 2023, as well as giving an overview of the goals I had made at the beginning of the term and my progress in achieving them."),a.createElement("h2",{style:s},"About Clear Software"),a.createElement("p",null,"Clear Software is a software development company based out of Waterloo Ontario. The company builds custom software solutions for clients around the world. The company is fully remote with most employees working from home in and around Southwestern Ontario. The main channel of communication was through Slack. Slack offers the convenience of quickly messaging colleagues for various needs, such as help with a software issue or requesting access to a company resource. The team is always friendly and ready to assist at a moment's notice. Additionally, the team met virtually at the beginning of every week through Google Meet to discuss pending issues and what work needed to be prioritized in the week ahead. Google Meet was also used for individual discussions when voice/video conversations were more efficient for discussing ideas and software features/bugs than solely relying on text."),a.createElement("h2",{style:s},"Job Description"),a.createElement("p",null,"As a software developer at Clear Software, the bulk of my work came in the form of writing software on the server for the web application that Clear Software was building for McKellar. McKellar is a structured settlement firm conveniently located in Guelph, Ontario. Clear Software was working with McKellar to build out a new web application to help modernize their existing software systems. At the time I joined the company, the project was nearly complete and sprinting head-first toward the finish line, with just a few pieces missing before the first major phase of the project could conclude."),a.createElement("p",null,"The first project I was tasked with was recreating the business reports McKellar used to analyze internal data. The idea was to translate these reports from being generated within the old system, to being generated in the new system. This was to be done using parts of the Jaspersoft stack. How it worked was you would write a variant of XML called JRXML (a specific flavour of XML created by Jaspersoft) inside of an IDE called Jaspersoft studio which contained all the information needed to render the report, including embedded SQL queries. You would then upload the JRXML file to a JasperReports server hosted in a Docker container in the cloud. The JasperReports server would also contain a UI that would let users enter parameters through an HTML form that would let them filter for specific data in the report. However, in the end, we found that the process of manually creating the reports one by one using Jaspersoft technology was too slow and not flexible enough for what the client needed. Thus, the project was put on hold until a better solution was developed. The better solution happened to be rendering the reports in Excel spreadsheets using a Node library to automatically create them. This was implemented towards the end of my term with just two weeks remaining, so I got the chance to fully implement a few of the reports before the end of my term."),a.createElement("p",null,"After the reporting work was put on hold, I was tasked with working on another big project. The project involved the automatic filling in of structured settlement annuity applications that McKellar uses in conjunction with companies such as BMO, Canada Life, and Sun Life. These applications come in the form of pre-built PDF templates with blank text fields that need to be filled in for each annuity application. This involved using the PDF-Lib library to read in a PDF template, extract the text fields, and fill them in with data from the database. This was a very involved process as it required understanding a complex data model to understand what data is required for each field and what database tables are needed to fill it, as well as filling in/testing many different PDF templates. Each life insurance company had two different annuity application types associated with them (one for tort and one for no-fault) and they were offered in both English and French."),a.createElement("p",null,"Another project that I worked on during my time at Clear Software was the automatic updating of TeamWork task lists. TeamWork is a project management platform used by Clear Software to manage each project the company works on. This involves creating tasks within individual task lists that are then assigned to members of the team who have the requisite skill sets to complete them. The project that I worked on involved updating the task list titles to add the total budget, the estimated time to complete all tasks, and the total time taken for each task inside of each task list for a given project. This was done by utilizing the TeamWork API to get all task lists within a project, get all tasks within a task list, and then get all time entries submitted for each task. Node and TypeScript were used for the project to fetch, process, and then update the data through the API. Automated tests and code linting were also used to ensure that the code was both accurate and clean."),a.createElement("h2",{style:s},"Goals"),a.createElement("p",null,"Around the beginning of my co-op term, I made three 3 different goals that I would work to achieve throughout the term. The following are those goals:"),a.createElement("div",{style:g},a.createElement("div",{style:c},a.createElement("p",null,a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABmJLR0QA/wD/AP+gvaeTAAAiVUlEQVR42u3deXBdV53g8Vf911RX1/w5U1PU/DHFQPU0wYsUx9mAhDVAoNk7gaYhwEAmkDSksSXZie3gkKUTEmchcSArIYsTEkL2fbXek2TJljd5keV9t2zLlmRZm8/c8xrT7rTteNHy3r2fX9WnWIpAuO/J96v3zjk3lyvxmTip7gNjq/I/qqgq3Du+ulCoqM5vHleT7xxfne9J/nXf+Kr8geSfBwAYMcV7T3IPSu5F8Z40rjq/qXiPSu5V8Z4V7105c5w3/J/XjUku5E3JhWypqKrt90YDoByNqy4MJv+4oaK69sFxU/NnusMfZiqr6j8/vrq2kFyoPm8aAFKqN7nX1Z5aM/dzmb7pn3Z58wfH18x9YnxNocubAoCM6RpfVfd4vBdm5sZfMXnu6eOrCs1JBXkDAEDylXdlTWFiam/8H57a8NF44x/nxQaAw6wZyLeNmfTOeam58Y/5+cL/FldGenEB4Fh2GBSaz7g6/76yvvkn/ydmJqsfB7ygAHB8OwiSTwTuyuXCX5Xfx/3VhV1eRAA4iRCoyu8smy2E46rnXuNwHgAYMgfi+Tilu5f/h41/7bt+ABi+tQEfmrH0b0rq5j9hyhvj7OcHgOFeG1DbOWZK7Skl9H2/E/wAYCTEY/LHTa771Cgf6lP4SvI3Y5U/AIyswTHV+QtHZ4vf1MJlFvsBwGitCcgfqJiS//HI3vxr6r6WLEZw8weAUY6Ayin5b47Mav/Jc89NtiMMuvAAUAoKg2OrGz89vL/5/0vd31nwBwAlFwF9E39eN2ZYbv7/+9Ln/6utfgBQulsEh+WcgOTxvc0uMACUtMah/d6/Jn+ViwoApW9sTf7aIdrrP/f05L/Qin8AKJOdAfGQvpO8/Ye/8lQ/ACi7CNh5ck/2qync4UICQPmpqK6bdUI3/zOuzr9vvGN+AaBMdwXkBydMbfifVv0DQNbU5JuO76P/5ClDLhwAlL94gu9x/PZfWOGiAUAa1gIUlh3jnv/CRBcMAFK0HmBq/sxj+O0/v8jFAoA0bQssNL/XiX9/60IBQPpMnFT3gSP/9l8z9wkXCQBSuBagKj/nKAHgaX8AkM5zAWo7D//xf1X9510gAEivMZPeOe9wB/8UXBwASLW3D7f6v8+FAYBU2/8fbv4fvrKu0kUBgPSL9/x/P/q3On+XiwIAGVgMmDzp9y8BUFFd2+qiAEAGVNWuOPTs/34XBQCycB5AbX/x5n/a5c0fdEEAIDtOubT2/bmxUwsXuxgAkB2Vk+b+IFdRVbjXxQCADC0ErK79bdwBUOdiAECW1OaTHQD5zS4EAGRqJ8Cm3LiafKeLAQAZ2glQnd8TPwHocTEAIFNfAfTEZwA4AwAAsnYWQPJPDrgYAJAhNfnBnAsBANkjAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAABICLAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAALgIACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAN7ltKmFcN61jeHCWxeGH9/bEq6Y0xpufHZNuPeNjeFPjdvCWy27wsJ1e0PLxq6wfHNX2Lizp6i9sy/s2dcfOnsGwqHT3TtQ/PcP2pn85w7+Na1busOi5L+rrrUjvLK4PTzdtD3MKWwJ9725Mdz64row84m28NMHloXv3LE4fOGG+eHMaXVeIwEAwImakNzkv3Tj/HDpfcvCDc+sCXPyW0J+5e7iTXlw8EAo5enpGwybd+8PC9buDc/N3x7uenVDmPZYa/je7CXFcKmo8foKAADCWdPqw/fvWhJuem5teGlhe1jf3hMGSvwmfzLT2z8YWrd2hxead4RbXlgXfnJfSzEMvBcEAEBqnTqlEL51+6Jw7VOrk4/rt4dVyY1wMMU3++OZju7+0NDWUfx64bL7l4VzftHgPSMAAMrXN2Y1Fz/Gf3vZrtC1f8Cd/hjnQNJFbdv2hScatoYrk68QPnddkwAgfYxJy/h5zofK5Lf8i2YvLv4mu3ZHjzfFEE5cA/Fw7eZw8d1Li4shBQACwBgBMOo3/XhTiqvw9/b0eyOMwMRPU15NdibETwfOnl4vABAAxgiAkRNX6v/u7U2hfW+fF3+UFxbGbYqXP7g8TLyiTgAgAIwRAMOzRa/q4RXFBWsHrN8ruYnnHMRPYj4yo14AIACMEQBDsF0v+Zg5LubbkuxxN6U/X0wOJhIACABjBMAJi9vR7klO2bOCXwAIAASAMRkIgPgbfzyoxqI+ASAAEADGZCAA4mE9M59sC7u6LOwTAAIAAWBMJgLgkuThOquTw2eMABAACABjMhAAn7x6Xng2eXCNEQACAAFgTEYCYPrjq4rn0BsBIAAQAMZkIADOndkQ3li604smAAQAAsCYrARA/K7f6X0CQAAgAIzJSABU1OSLW/s8gVcACAAEgDEZCYCzptWH15b4yF8ACAAEgDGZCYDPXNMYWrd0e4EEgABAABiTlQD4yk0LnN8vAAQAAsCYLAXAP96+yBY/ASAAEADGZCkALrhloZu/ABAACABjshQA35jV7OYvAAQAAsCYLAXA+dc3hfZOe/wFgABAABiTmQA45xcNYc12D/MxAgABYExmAuC0qYXQtHqPF8EIAASAMVkKgDmFLV4AIwAQAMZkKQCqH1np4hsBgAAwJksB8OVfLQjdvQMuvhEACABjshIAp04phMXrO114IwAQAMZkKQB+/fJ6F90IAASAMVkKgK/f3Bz6BjzX1wgABIAxmQqAhrYOF9wIAASAMVkKgBqr/o0AQAAYk60AOOPKurBtT6+LbQQAAsCYLAXArOfXutBGACAAjMlSAJw1rT7s9KAfIwAQAMZkKwBuf2mdi3wSs7urv/iwpJaNXUUL1u4Nda0dxQWV8V+3bukOG3f2hB17e8Oeff2hv4x3WQgABIAxKQmA+LCf9r1++z/axJt2vKE/Ursl3PDMmvDTB5YVt0t+4up5obLmxK77J5O/9oJbFobL7l8WZj7ZFma/uiH8cd624v9OKb8eAgABYExKAmDKo1b+v3vW7ugpPgRp8sMrwvn/Ojo3vPgI5h/ctSRc81RbeKywNTQmT2Ts2j/6RzMLAASAMSkJgIXr9mb++g4mn8jPX7MnXPvU6vDZ65pK9s+0yuSI5gtvXVj8FOL1JTvDrq6R/6RAACAAjElBAHwt+Rg7y7O1ozfc9uK6cN61jWX5Z1xF8vXDV29aEH75x7bw6uL2sK93UAAIAASAEQDv7bevbcjk9VyZLMqrSj7en5Csf0jTn3mnJ2c5/Ox3y8PTTdtDR3e/ABAAAsAYAXB465LvurP2G//0x1tPeOFeOYlPdLz47qXFtQztQ7jFUwBQFj52VUNmxWe5p2WWbujM9GsZDcfPR/wuOStzIPmO//G6rcXzDrL4Z2Hc6REXNDas6iheCwEgAEixT/5yXmr+8F6ULFLzmtr7f6ITF8pdck+L1/zPvnTj/PDA25uKZxcIAAGAABAAGZSFp/61bds3atv4St3EK+qKW0DjQUUCAASAAMiI+OCf3v7BVN/8lyRfHX1kRr3X+xjET0iONQgFAAgAAVDG4uKwNE/r1u7iQTpe6+PzvdlLiscYCwAQAAIgpeLe97RO3P5Wrvv6S8U/J0cdr0oiSgCAABAAKfNacopcWufyB5d7jYdoG2E8cbCzZ0AAgAAQAGmxeff+VN78X1rY7vUd6j9LkocWPbdghwAAASAAyl1cGJfG6UsesWvF//B+LbBtT68AAAEgAMpVWg8Aio/S9foOr4/OaEjdYUoCAAEgADJj8kMrUhkAcQW71xcBgAAQABzBrSncARDP+K+o8doiAEAAcESPFbamLgBetvgPAQACgKN7eVF76gJg1vNrvbYIABAAHE3j6j2pC4C4rsFriwAAAcBRHOmEt3KeeLSx1xYBAAKAo4h7udM2371zsdcWAQACgKOJZ+WnbX58b4vXFgEAAoCj6do/kLoAqHlkpdcWAQACgKPp7R9MXQDc8sI6ry0CAAQARzN4IH2nAL6ePN3Qa4sAAAFAxj4B2LHXSYAIABAAHNXenvQtAoxzkZ0ACAAQABzZ9hRuA4zjaYAIABAAHMX69p5UBkB370Dxfe81RgAgAAQAh9GawpMAfQqAAAABwHtoSuGzAA7OYLLF4R9vX+R1RgAgAAQA7/bcgh0hzbMh+YrjIzPqvdYIAASAAOBQ976xMaR9Xl3cblsgAgABIAA41LVPrQ5ZmEfzW7zeCAAEgADgoH9+YFnIyjgiGAGAABAA/NnXb24OWZo7X1nvdUcAIAAEAKdOKYT9fYOZioD4dUClNQEIAASAAMi6xes7Q9Zm7vLd4ZxfNHj9EQAIAAGQXY8VtoYszsadPeGCWxZ6DyAAEAACIJuu+sOqkNWJT0OMiwMrk69CvBcQAAgAAZCthYCzmkPWpzE5EfHz1zd5PwgAFwEBIACyIx6Ssy2lTwU8nulJFkPOfnVDOG2qTwMEAAgAAZARTzZsC+bfZuWW7vDdOxd7XwgAEAACIP0uf3C5O/8hc+BACC8vag/n+1pAAIAAEABpdtb0+tA3cMCd/zCLBO9Jnpdw9nQPFBIAIAAEQErFvfHm8NPR3R9ufXFdOHNanfeKAAABIADSZfJDK9zp32N2dvaFG59dE864UggIABAAAiAl4ur3XV197vLHMLu7+os7BpwmKABAAAiAVPj9O5vd3Y9junsHwsO1m8N51zZ6/wgAEAACoHx9+VcL3NVPYPqTBZTPzt8evnrTAu8jAQACQACUp8LKDnf0E5zBZCPF60t3houcIyAAQAAIgHLznTsWu5MPwSzb1BVmPtkWTrdgUACAABAA5aJ+lU8Bhmriwsr73twYPnudQ4UEAAgAAVDi4lG4Zoi/Hki+H3h72a5w8d1LvccEAAgAAVC68isdDDScXw9Me6w1TLzC1wMCAASAACgxf3/j/OJRuGb4Jh4sFL8esI1QAIAAEAAl5TevbXCXHoGJz2GIDx+KCzC97wQACAABMOriR9Tr23vcoUdwFqzZW3w6Y2WN958AAAEgAEbRJfe0FB+Pa0Z22rbtC1fMaQ2nTil4HwoAEAACYHQ8NNcRwaM1m3fvDzc84wFEAgAEgNd0FMQHBS3Z0OluPIrTniwYnPX8WiEgAEAAMLLiQTYd3f3uxKM88WChW15YZwuhAAABwMj5+e9XWA9QIrMl+Wpg5hNtYcJUawQEAAgARsDtL61z9y2hibs0ah5ZGSrsGhAAIAAYbo/mt7jzltjENRoXzXaOgAAAAcAwqky2pr2+ZKe7bglOfN7A+dd78JAAAAHAMImr0Rcmr4cpvYlHON/9+kY7BgQAAkAAMDzOnFYXGjw6uGRn46794cf3tnivCgAEgABgeD4JKKwUAaU88TkDn7h6nverAEAACACGVtyT/s7yXe60JTzxDIfpj6+yW0AAIAAEAEN/WuCLzTvcaUt83mrZFc6d2eA9KwAQAAKAoRN/u4yn1A06LKikJx4rbG2AAEAACACG3KTkxMCevkF32hKeeKLjw7Wbi5/ceM8KAASAAGDIfOv2RWH7nl532hKfuJXzU79s9J4VAAgAAcDQ+fjMeRYHlsHEUIvBJgD80CIABABDui4gPs++b8DCgFKeeHjQlEdXCgAQAAKAofXN2xaGdTt63GlLfF3AfW9uzOxWQQGAABAADJOzp9eHP87b5pHCJT5P1G8NlTUCAASAAGCIfW/2krBm+z532hKeF5IzHU6dUhAAIAAEAEPr9OQI4dmvbrA2oITn5YXtYUKGtgkKAASAAGAEXXDLwrB4fae7bYnOG0t3Fo96FgAgAAQAw7JTYPJDK8Km5Ol1pjQ/CcjCmgABgAAQAIzi1wLxKOGu/QPuuiU2cXeAAAABIAAYVvFkuqeS3QKDHipQUnPNU20CAASAAGD4nX99U3FL2oAQKImJQfaz3y0XACAABAAj4+9vnB+ebtouBEpg4tczX7xhvgAAASAAGDnxxvOnxu22Do7yLNnQmcrtgQIAASAAKPX39NXzimcI7O7qdzcepbn79Y0CAASAAGB0xP3pVz7WGlZt7XZHHun1AMmHMD/87VIBAAJAADC65whcdv+ykF+523MGRnC2dvSGs5LnOwgAEAACgJJYJxD3rHd0+3pgJCZN5wMIAASAACBFXw+s2NzlLj2MExdkxl0aAgAEgACg5HzztoXh2fnbQ7/dA8MyryfPCxAAIAAEACV9wuDsV9aHHXt73bWHeH6UggWBAgABIABIudOSPezTkq8Hlvt6YMimZWOXAAABIAAoHxfNXhxeXtTuuQNDMOW+LVAAIAAEABn0hWT3wMO1m8O+3kF38hOcd5bvEgAgAAQA5emcXzSEW19cF7btsU7geCeewfC1m5sFAAgAAUB5rxOI2wjXbN/nzn4cEx/jLABAAAgAyl7llEKoeWRlWLnFccPHMr39g8VPUQQACAABQCrE44YnP7TCJwLHMFf/sU0AgAAQAKTLqcknAjP+sCps3r3fnf4Is2DtXgEAAkAAkE4TkjUCNzyzJnTtH3DHP8xiwM9c0ygAQAAIANLr3JkNxe2DzhH4jzPzyTYBAAJAAJB+3/71otBqoeBf5s2WXQIABIAAIDvrA255YV1xJXzWJz6OOS6cFAAgAAQAmfHlXy0IyzZ5zkC5PSZYACAABAAMySLB2a9uCFleGhAPUhIAIAAEAJl02f3Lwt6e/kwGwGOFrQIABIAAILu+mDxoaO2OnswFQHzcsgAAASAAyLSPz5wXFibv3yzNQPL9R/wqRACAABAAZNoZV9aFeW17MhUB51/fJABAAAgAOHNaXWhanZ0I+OFvlgoAEAACAKKzp9dn5tCg6Y+vEgAgAAQAHPT55KPx3V3p3x0Qt0IKABAAAgAOcfHdS1P/DIGnm7YLABAAAgDeLT5IKM1Tv6pDAIAAEADwbmcl6wG27elNbQCU08+sAEAA+MMERtTUOa2pDYC42FEAgAAQAHAY8SmCaf0UYH17jwAAASAA4Eh+89qGVAbA9iRsBAAIAAEAR/CF5HkBaZzOngEBAAJAAMDRbO1I39cAfQMHBAAIAAEAR/PSwvbUBUA850AAgAAQAHAUNz+3NnUBsL9vUACAABAAcDRXPpa+7YB7e/oFAAgAAQBHc9n9y1IXADs7+wQACAABUGpOT55P//Wbm12LEvHdOxenLgDiwkYBAAJAAJSYj85oCN29A2HS71e4HiXgkntaUhcAK50ECAJAAJRmAMQ5kDyQ7rfJQTSVNa7JaIohlrZpaPMwIBAAAqBkA+Dg1K7YHT5x9TzXZpTMej59uwBeWdwuAEAACIBSD4CDi7YuubfF9XEOwJDM43VbBQAIAAFQDgFQPLzlz18JxIfUuE4jo6ImnScB3vnKegEAAkAAlEsAHLqA68JbF7pWI+Cf7kjfDoA48VHHAgAEgAAoswCI09s/GG57cZ1PA4bZI7VbUhkAFyVbGwUACAABUIYBcHBaNnaFb92+yHUbBh+fOS/s6x1MZQB86peNAgAEgAAo5wA4uDZgTmFL8a9z/YbO/W9tSuXNv2v/QHFtgwAAASAAyjwADk57slPgqj+sCpW+FjhpcY1Ff/LI3DTO/DV7yuq1EAAIAAEgAI5xWrd2h0vvW+ZanqB4FPOKzV0hrfPQ3M0CAASAAEhjABychlUdZbXYqxTEUxdfX7IzpHmmPdYqAEAACIA0B8DBqU9C4Pt3LXFtj+HmHw/ISft89aYFAgAEgADIQgAcnKbVe8JPH1jm2QKHMfGKuvDyovbU3/zb9/aV1QJAAYAAEAACYAhnfXtP+Nen14Szpte73onzr28KC5P3cBbm+QU7yu71EQAIAAEgAIZhO9iTDdvCd+7I7jqBK5IT8Tp7BkJWZkayS0QAgAAQABkPgEOnbdu+4lPvPnddUyaucTw8KW6Hy9LE8yI+c02jAAABIAAEwH+eA8lNYvH6znDTc+mMgW//elHxUbiDB0LmZsGa8vw5FQAIAAEgAEZh4pkC8US8HyS7CMr1uQNnTqsLUx9dmbnf+N89cd2HAAABIAAEwAmtGXhn+a5wywvrwneT8wUmTC3dIDg7WeB4+YPLw3PJore0nud/vB//f7oMP/4XAAgAASAASnD29w0WV88/mt8Spj/eGr4xq7m4nW40rtnHrmoI/++epeHXL68vbndM6zG+JzpvL9tVtj8PAgABIAAEQDn8ppn8qrlxZ0+Yu3x38cjZG55ZEyb9fkVxp0FcgBaP2T3RQ3ri0/m+/KsF4ZJ7WsI1T7WFB97eFF5LTu2L/3vm6POT+1oEAAgAASAARnd6+weLB9KsTnYexMcZR/G39rrWjqKlGzqL/148jz/e3Du6+93BT2LiuQ/lfPiTAEAACAABYMwJzPVPry7rnwcBgAAQAALAmOOcHXt7T/hrFwEAAkAACABTpnPtU6vL/udBACAABIAAMOY4ZvPu/aO2K0MAgABAAJhRmngOQhp+HgQAAkAACABjjnEKKztS8/MgABAAAkAAGHMME7dZfunG+QIABIAAEAAmSxMf5JSmnwcBgAAQAALAmPeYBWv3hsoyfWiTAEAACAABIADMCUx8WNMXbpifup8HAYAAEAACwJgjzIHk2UeTH1qRyp8HAYAAEAACwJgjTHwwUlp/HgQAAkAACABjDjP1qzrCqSn73l8AIAAEgAAw5ijTljxR8WNXNaT650EAIAAEgAAw5pDZvqc3fO66ptT/PAgABIAAEADG/Hl2dvaFr93cnImfBwGAABAAAsCYZHZ19YWvz2rOzM+DAEAACAABYDI/7XuTm//NzZn6eRAACAABIABMpmdDe0/4YgoP+hEACAABgAAwR5jm5Ijfc37RkMmfBwGAABAAAsBkcp6dvz2cfmVdZn8eBAACQAAIAJOpiY/1nflkW+Z/HgQAAkAACACTmVm1tTtceOtCPw8CAAEgAASAycLEh/o8Ub81nJHhj/wFAAJAAAgAk6mJx/p+/64lfgYEAAJAAAgAk4Xp6RsMs1/dECZe4bd+AYAAEACZFm8EDckT3ky6ZzD5uP9PjdvCedc2et8LAASAAODfffO2heHlhe1hMN4pTKpm7vLdmTrOVwCAAOAEfP76pvBw7eawr3fQnbPMp661I/zTHYu9rwUAAkAAcOzOndkQbn9pXVizfZ87aRlN/8CB8ELzjnDBLbb1CQAQAJyk+CjY+97cWHwsrCnNia9NfI18xy8AQAAw5E6bWgg/+93y8NqSncWT48zo/7b/xtKd4fLkNYmvjffo0ATAARcCASAAOLKzptUXbzzxIJmtHb3uxiO1mj9ZpBl3bVz7p9Xh4zPneS8OpZr8YAyAfhcDASAAOHZxlfms59eGeW17ir+ZmqGbrv0Dxd/0r/rDquLaDO+34VFRVdufq6jO97gYCAABwAl+OjC9PlxyT0u485X14Z3lu0JHd7+7+HFM/HplQfJI3rtf31g8rW+Cj/dHSG1PblxNvtOFQAAIAIbOl26cH66Y0xrmFLaElo1d1hAc/Eg/+bBkQ3tPeHVxe7jtxXXhe7OXOKVvtD4BqM7viZ8AbHYxAIbXp69pDBffvTTc8Mya4lqC+Ftv/Lg7zR/lx/h5dv724v/ni2YvLq6l8F4oEVW1m5I1AIWCiwEwOj57XVMxDKY91lr8GuGJhq3F0+ziY2s7e0o3EOICvS2794fG1XvC003bw+zk7/3K5P9D/K0+bs+rqPHalvhXALXJJwC197gQAKW7xiCeTfB/f7MkXP7g8jAjWRx303Nri9+Zz8lvCc8v2FEMhvh1UfyNOx5mtHFnT1F7sl9+z77+okO/hujuHfjLv3/wPxv/uvjXR4WVHeHF5ICd+N9/V/Iwnfgb/NTkK42f3NcSvv3rRcUTFH1XX97GVefvyo2tyv/IxQCA7Di1uu57uVMurX2/iwEA2RHv/bk4zgIAgAydAXBwknUArS4KAGRhC2Dt8r8EQFwM4KIAQAYWAFblb/9LAIytzo93UQAg/SZMeWNc7tAZX1PodWEAIMWqavfn3j3JoQB5FwcA0qz2rf8UAGOrGz/twgBAeo2Z9M55ucNNcixwlwsEAClc/Fed35s70oyvqnvcRQKANH7/X3jkiAFw2uXNH3SRACB13/2HiZPqPpA72iT/oWYXCgBStfd/fu695kPVDRNcLABIjw9fWVeZO5aJxwS6YACQCktzxzqVk+ee64IBQAp++5/a8NHc8Uz8vsCFA4Cy1pA73vk/U97+HxVV+QEXDwDKcd9/YfCMq/Pvy53IJGcG3+oiAkAZmlK4MXcyk3wVsNOFBIDyUVFdaM+d7FTWFCYmEXDABQWAMpDcs8dW1Z2dG4qprMlf5aICQDl89z/3mtxQjl0BAFDiavL1uaGeD81Y+jfjqms7XWAAKMXv/fN7K3/Y+Ne54Zjkq4C/HV9T6HWhAaCk9I2ZUntKbjhnQk3+Y3FvoYsNAKWx3/+4T/s70amYXPhK8lxhOwMAYJRX/I+pzl+YG8lJDgm6NPkfFwEAMDoOVE6uuyQ3GjOuJv8lxwUDwEh/7J8fHDt17j/kRnPi9w7J34yFgQAwIgp946fkP5ErhYkrD20RBIAR2OqX7MjLldKcM+ON/zK+uvZNLxAADMeCv0JzPJMnV6qT/A3OtDgQAIZusV9F1dwbcuUw46bmzxzvKYIAcJIf+Rfa40P5cuU2xU8DqmrtEgCA4zOQrPS/K1fOc8bV+fclDydo8mICwDGoyc875Zd1/z2XlonPJo4LGMZ5cQHgcHv728ZNrvtULq0TtwwmexgLyY4BLzgAVBdaPlTdMCGXlZk4qe4DySmCc5wfAEDmftuvySf3vtpHT7m09v25LM/Y6sZPJ08zeie5KPu9MQBI5z7+2uQeV/tWqj/mP6mdA/9S93fJ9yA3xY9EiscdetMAUJbf6RcGk3/cUFFd+2BZbuUb7Ykfj1ROmvuDsVWFu5NyKiQFtSkehZjEwb4/B4JDhwAY8cN5/u0eVNiX3JP2xHtTco/KJ19r/zbes8b8/K3/Ver31/8P5TsLg2dBiVEAAAAASUVORK5CYII=",style:d,alt:"TypeScript Icon"}))),a.createElement("div",null,a.createElement("p",null,a.createElement("strong",null,"Get better at TypeScript -")," My first goal was to get better at TypeScript. Before starting at Clear Software, I only had a brief experience with the technology, using it as part of an Angular app that my previous co-op employer was using to monitor their larger mobile app. At Clear, I was able to get a much deeper and richer experience with TypeScript, using it in the vast majority of the software I wrote over the term. I really enjoyed the process of adding explicit types to the JavaScript code I wrote. It enabled me to catch potential bugs more quickly and made the development experience overall more enjoyable."))),a.createElement("div",{style:g},a.createElement("div",{style:c},a.createElement("p",null,a.createElement("img",{src:r,style:d,alt:"Software Architecture Icon"}))),a.createElement("div",null,a.createElement("p",null,a.createElement("strong",null,"Improve software architecture skills -")," My second goal was to improve my software architecture skills. This includes aspects such as OO design, file structure layout, and use of design patterns. I’ve felt this aspect of my abilities grow tremendously as I’ve improved in my use of classes, custom types, and interfaces for OO design. I’ve gotten better at structuring the layout of files to ensure that the right code goes in the right places. Places that make it easy to extend, re-use and build off of in the future. I’ve also improved my use of design patterns, especially when it comes to the factory pattern and its ability to produce objects of different types on the fly when needed."))),a.createElement("div",{style:g},a.createElement("div",{style:c},a.createElement("p",null,a.createElement("img",{src:n,style:d,alt:"GraphQL Icon"}))),a.createElement("div",null,a.createElement("p",null,a.createElement("strong",null,"Learn GraphQL -")," My third goal was to learn GraphQL. Since GraphQL is used heavily on the front end, I thought this might be a good opportunity to learn more about the technology and get my feet wet. Unfortunately, since the majority of my work revolved around work on the server, I didn’t get the chance to use GraphQL as much as I would’ve liked. However, I did get an opportunity to read through the GraphQL documentation as well as use GraphQL a little bit during the process of fixing bugs on the front end."))),a.createElement("h2",{style:s},"Conclusions"),a.createElement("p",null,"In conclusion, over my past co-op work term, I was able to grow tremendously as a developer. Working at Clear Software enabled me to work day in and day out on a multitude of different technologies and platforms, and grow my skills in areas such as TypeScript and software architecture. These skills will be with me for a long time as I continue this journey along this ever-evolving software landscape."),a.createElement("h2",{style:s},"Acknowledgments"),a.createElement("p",null,"I‘d like to thank Steve Grinyer for originally hiring me and allowing me the opportunity to work at the company. I’d also like to thank the entire team for being a pleasure to deal with and always willing to help when asked. Thank you.")));const f=()=>a.createElement("title",null,"Clear Software Co-op Summer 2023 Work Term Report")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ee8828e9920865cc587e.js.map