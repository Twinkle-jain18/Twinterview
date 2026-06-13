/* =============================================
   TWINTERVIEW – Complete Question Bank & Logic
   ============================================= */

/* =============================================
   QUESTION BANK
   ============================================= */
const questionBank = {

  /* ========== COURSES ========== */
  courses: {
    mca: {
      label: "MCA",
      emoji: "🎓",
      description: "Master of Computer Applications",
      questions: [
        { text: "Explain the concept of process scheduling in OS. What are the different scheduling algorithms?", difficulty: "medium", topic: "Operating Systems" },
        { text: "What is normalization in DBMS? Explain 1NF, 2NF, and 3NF with examples.", difficulty: "medium", topic: "DBMS" },
        { text: "Describe the differences between TCP and UDP protocols.", difficulty: "easy", topic: "Networking" },
        { text: "Explain the concept of Object-Oriented Programming and its four pillars.", difficulty: "easy", topic: "OOP" },
        { text: "What is a binary search tree? How do insertion and deletion work?", difficulty: "medium", topic: "Data Structures" },
        { text: "Explain deadlock in operating systems. What are the four necessary conditions?", difficulty: "hard", topic: "Operating Systems" },
        { text: "What is the difference between stack and queue? Give real-world use cases.", difficulty: "easy", topic: "Data Structures" },
        { text: "Describe the Software Development Life Cycle (SDLC) and its phases.", difficulty: "medium", topic: "Software Engg" },
        { text: "Explain SQL joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN.", difficulty: "medium", topic: "DBMS" },
        { text: "What is a virtual machine? Explain hypervisor types.", difficulty: "hard", topic: "Cloud & OS" },
        { text: "Describe the concept of indexing in databases and its advantages.", difficulty: "medium", topic: "DBMS" },
        { text: "What is recursion? Explain with Tower of Hanoi example.", difficulty: "medium", topic: "Programming" },
      ]
    },
    bca: {
      label: "BCA",
      emoji: "📘",
      description: "Bachelor of Computer Applications",
      questions: [
        { text: "What is the difference between compiler and interpreter? Give examples.", difficulty: "easy", topic: "Programming" },
        { text: "Explain the fundamental concepts of OOP: encapsulation, inheritance, polymorphism, abstraction.", difficulty: "easy", topic: "OOP" },
        { text: "What is a linked list? Explain singly and doubly linked lists.", difficulty: "easy", topic: "Data Structures" },
        { text: "Describe what HTML, CSS, and JavaScript each do in a web application.", difficulty: "easy", topic: "Web Basics" },
        { text: "What is a database? Explain the difference between SQL and NoSQL databases.", difficulty: "easy", topic: "DBMS" },
        { text: "Explain the OSI model and its 7 layers.", difficulty: "medium", topic: "Networking" },
        { text: "What is the difference between procedural and object-oriented programming?", difficulty: "easy", topic: "Programming" },
        { text: "Describe bubble sort and selection sort algorithms with time complexity.", difficulty: "medium", topic: "Algorithms" },
        { text: "What is cloud computing? Explain IaaS, PaaS, and SaaS.", difficulty: "medium", topic: "Cloud" },
        { text: "What is an operating system? What are its main functions?", difficulty: "easy", topic: "OS" },
      ]
    },
    btech_cse: {
      label: "B.Tech CSE",
      emoji: "⚙️",
      description: "Computer Science Engineering",
      questions: [
        { text: "Explain time and space complexity. What is Big-O notation?", difficulty: "medium", topic: "Algorithms" },
        { text: "Describe dynamic programming with examples like Fibonacci and Knapsack.", difficulty: "hard", topic: "Algorithms" },
        { text: "What is a graph? Explain BFS and DFS traversal algorithms.", difficulty: "medium", topic: "Data Structures" },
        { text: "Explain memory management in C/C++: stack vs heap allocation.", difficulty: "hard", topic: "Systems" },
        { text: "What is a RESTful API? Explain HTTP methods: GET, POST, PUT, DELETE.", difficulty: "medium", topic: "Web Development" },
        { text: "Describe paging and segmentation in OS memory management.", difficulty: "hard", topic: "OS" },
        { text: "What is multithreading? How does it differ from multiprocessing?", difficulty: "medium", topic: "OS" },
        { text: "Explain ACID properties in database transactions.", difficulty: "medium", topic: "DBMS" },
        { text: "What is the difference between Dijkstra's and Bellman-Ford algorithm?", difficulty: "hard", topic: "Algorithms" },
        { text: "Describe the concept of hashing and collision resolution techniques.", difficulty: "medium", topic: "Data Structures" },
        { text: "Explain design patterns: Singleton, Factory, Observer.", difficulty: "hard", topic: "Design Patterns" },
        { text: "What is Docker? How does containerization differ from virtualization?", difficulty: "hard", topic: "DevOps" },
      ]
    },
    mtech: {
      label: "M.Tech",
      emoji: "🔬",
      description: "Master of Technology",
      questions: [
        { text: "Explain CAP theorem in distributed systems. How do NoSQL databases choose between them?", difficulty: "hard", topic: "Distributed Systems" },
        { text: "Describe microservices architecture. What are its pros and cons vs monolith?", difficulty: "hard", topic: "Architecture" },
        { text: "Explain consensus algorithms like Paxos and Raft.", difficulty: "hard", topic: "Distributed Systems" },
        { text: "What is MapReduce? Explain with a word-count example.", difficulty: "hard", topic: "Big Data" },
        { text: "Describe the internals of a B+ Tree and its use in database indexing.", difficulty: "hard", topic: "DBMS" },
        { text: "Explain garbage collection algorithms: Mark-and-Sweep, Generational GC.", difficulty: "hard", topic: "Systems" },
        { text: "What is the actor model in concurrent programming?", difficulty: "hard", topic: "Concurrency" },
        { text: "Explain LSTM networks and where they outperform standard RNNs.", difficulty: "hard", topic: "Machine Learning" },
      ]
    },
    bsc_it: {
      label: "B.Sc IT",
      emoji: "💻",
      description: "Bachelor of Science in IT",
      questions: [
        { text: "What is the difference between a process and a thread?", difficulty: "easy", topic: "OS" },
        { text: "Explain the concept of IP addressing and subnetting.", difficulty: "medium", topic: "Networking" },
        { text: "What is version control? Explain Git branching strategy.", difficulty: "easy", topic: "Tools" },
        { text: "What is responsive web design? How is it achieved?", difficulty: "easy", topic: "Web" },
        { text: "Explain the MVC design pattern in web development.", difficulty: "medium", topic: "Architecture" },
        { text: "What is cybersecurity? Explain common threats like phishing and SQL injection.", difficulty: "medium", topic: "Security" },
        { text: "Describe agile methodology and Scrum framework.", difficulty: "medium", topic: "SDLC" },
        { text: "What is an API? How does JSON differ from XML?", difficulty: "easy", topic: "Web" },
      ]
    },
    mba_tech: {
      label: "MBA Tech",
      emoji: "📊",
      description: "MBA with Technology Focus",
      questions: [
        { text: "How would you explain digital transformation to non-technical stakeholders?", difficulty: "medium", topic: "Leadership" },
        { text: "What is Agile project management? How does it differ from Waterfall?", difficulty: "easy", topic: "Project Mgmt" },
        { text: "Explain the concept of product-market fit and how technology companies achieve it.", difficulty: "medium", topic: "Product" },
        { text: "What metrics would you track as a product manager for a SaaS application?", difficulty: "hard", topic: "Analytics" },
        { text: "Describe a situation where data analytics changed a business decision.", difficulty: "medium", topic: "Data" },
        { text: "What is cloud cost optimization? How do companies manage AWS/Azure spend?", difficulty: "hard", topic: "Cloud" },
      ]
    },
  },

  /* ========== ROLES ========== */
  roles: {
    common_hr: {
      label: "Common HR & Gen",
      emoji: "🤝",
      description: "General questions asked everywhere",
      questions: [
        { text: "Tell me about yourself and walk me through your background.", difficulty: "easy", topic: "HR" },
        { text: "What are your greatest strengths and weaknesses?", difficulty: "easy", topic: "HR" },
        { text: "Describe a time you faced a difficult challenge at work and how you overcame it.", difficulty: "medium", topic: "HR" },
        { text: "Where do you see yourself in 5 years?", difficulty: "medium", topic: "HR" },
        { text: "Why should we hire you for this role?", difficulty: "medium", topic: "HR" },
        { text: "Tell me about a time you had a conflict with a team member. How did you resolve it?", difficulty: "hard", topic: "HR" },
        { text: "Describe a time when you failed or made a significant mistake. What did you learn?", difficulty: "hard", topic: "HR" },
        { text: "How do you handle tight deadlines and high-pressure situations?", difficulty: "medium", topic: "HR" },
        { text: "What is your proudest professional achievement?", difficulty: "medium", topic: "HR" },
        { text: "Do you have any questions for us?", difficulty: "easy", topic: "HR" }
      ]
    },
    frontend: {
      label: "Frontend Dev",
      emoji: "🖥️",
      description: "React, Vue, Angular & CSS",
      questions: [
        { text: "Explain the virtual DOM in React. How does reconciliation work?", difficulty: "medium", topic: "React" },
        { text: "What are React hooks? Explain useState, useEffect, and useContext.", difficulty: "medium", topic: "React" },
        { text: "What is the difference between CSS Flexbox and Grid? When to use which?", difficulty: "easy", topic: "CSS" },
        { text: "Explain event delegation in JavaScript. Why is it useful?", difficulty: "medium", topic: "JavaScript" },
        { text: "What is the difference between 'null', 'undefined', and 'NaN' in JavaScript?", difficulty: "easy", topic: "JavaScript" },
        { text: "How does the browser render a webpage? Explain the critical rendering path.", difficulty: "hard", topic: "Browser" },
        { text: "What is code splitting in webpack? How does lazy loading improve performance?", difficulty: "hard", topic: "Performance" },
        { text: "Explain promises, async/await, and the event loop in JavaScript.", difficulty: "hard", topic: "JavaScript" },
        { text: "What are Web Accessibility (WCAG) standards? How do you implement them?", difficulty: "medium", topic: "Accessibility" },
        { text: "Explain the difference between SPA and SSR/SSG in Next.js.", difficulty: "hard", topic: "Architecture" },
        { text: "What is CSS specificity? How does the cascade work?", difficulty: "easy", topic: "CSS" },
        { text: "Describe your approach to optimizing Core Web Vitals (LCP, FID, CLS).", difficulty: "hard", topic: "Performance" },
      ]
    },
    backend: {
      label: "Backend Dev",
      emoji: "🔧",
      description: "Node.js, Python, Java APIs",
      questions: [
        { text: "Explain RESTful API design principles. What makes an API truly RESTful?", difficulty: "medium", topic: "API Design" },
        { text: "What is the N+1 query problem in ORMs? How do you solve it?", difficulty: "hard", topic: "Database" },
        { text: "Explain JWT authentication. What are its advantages and vulnerabilities?", difficulty: "medium", topic: "Security" },
        { text: "Describe database connection pooling and why it's important.", difficulty: "medium", topic: "Database" },
        { text: "What is rate limiting? How would you implement it in a Node.js API?", difficulty: "medium", topic: "API" },
        { text: "Explain caching strategies: write-through, write-behind, cache-aside.", difficulty: "hard", topic: "Caching" },
        { text: "What is the difference between synchronous and asynchronous programming?", difficulty: "easy", topic: "Concurrency" },
        { text: "Describe how you would design a URL shortener service (like bit.ly).", difficulty: "hard", topic: "System Design" },
        { text: "What is middleware in Express.js? Give examples of common middleware.", difficulty: "easy", topic: "Node.js" },
        { text: "How does HTTPS/TLS work? Explain the handshake process.", difficulty: "hard", topic: "Security" },
      ]
    },
    fullstack: {
      label: "Full Stack",
      emoji: "⚡",
      description: "End-to-end web development",
      questions: [
        { text: "Walk me through building a full-stack feature from database to UI. What's your process?", difficulty: "medium", topic: "Process" },
        { text: "How do you decide whether to put logic in the frontend or backend?", difficulty: "medium", topic: "Architecture" },
        { text: "Explain how CORS works and how you configure it in a production environment.", difficulty: "medium", topic: "Web" },
        { text: "What is GraphQL? How does it differ from REST in a full-stack context?", difficulty: "hard", topic: "API" },
        { text: "Describe your CI/CD pipeline for a full-stack application.", difficulty: "hard", topic: "DevOps" },
        { text: "How would you implement real-time features using WebSockets vs Server-Sent Events?", difficulty: "hard", topic: "Real-time" },
        { text: "Explain your strategy for managing state in a large React + Node.js application.", difficulty: "hard", topic: "State Mgmt" },
        { text: "How do you handle database migrations in production without downtime?", difficulty: "hard", topic: "Database" },
        { text: "What is monorepo? What tools support it (Nx, Turborepo)?", difficulty: "medium", topic: "Tooling" },
        { text: "Describe your approach to testing: unit, integration, and E2E tests.", difficulty: "medium", topic: "Testing" },
      ]
    },
    data_analytics: {
      label: "Data Analytics",
      emoji: "📈",
      description: "SQL, Python, BI & Dashboards",
      questions: [
        { text: "What is the difference between correlation and causation? Give an example.", difficulty: "easy", topic: "Statistics" },
        { text: "Explain window functions in SQL with examples (ROW_NUMBER, RANK, LAG).", difficulty: "hard", topic: "SQL" },
        { text: "What is ETL? Describe a typical ETL pipeline for an e-commerce company.", difficulty: "medium", topic: "Data Engineering" },
        { text: "How would you handle missing data in a dataset? What are different imputation methods?", difficulty: "medium", topic: "Data Cleaning" },
        { text: "Explain A/B testing. How do you determine statistical significance?", difficulty: "hard", topic: "Statistics" },
        { text: "What is a data warehouse vs a data lake vs a data lakehouse?", difficulty: "medium", topic: "Architecture" },
        { text: "How would you visualize customer churn? What KPIs would you track?", difficulty: "medium", topic: "BI" },
        { text: "Describe the difference between OLTP and OLAP systems.", difficulty: "easy", topic: "Databases" },
        { text: "What is a pivot table? How does GROUP BY differ from PIVOT?", difficulty: "easy", topic: "SQL" },
        { text: "How would you build a sales forecasting model? What algorithm would you choose?", difficulty: "hard", topic: "ML" },
      ]
    },
    data_science: {
      label: "Data Science",
      emoji: "🤖",
      description: "ML, AI & Statistical Modeling",
      questions: [
        { text: "Explain the bias-variance tradeoff in machine learning.", difficulty: "hard", topic: "ML Theory" },
        { text: "What is the difference between supervised, unsupervised, and reinforcement learning?", difficulty: "easy", topic: "ML" },
        { text: "How does gradient descent work? Explain learning rate and convergence.", difficulty: "hard", topic: "Optimization" },
        { text: "What are precision, recall, F1-score, and when to prioritize each?", difficulty: "medium", topic: "Evaluation" },
        { text: "Explain how Random Forest works. How does it prevent overfitting?", difficulty: "medium", topic: "Algorithms" },
        { text: "What is Principal Component Analysis (PCA)? Why is it used?", difficulty: "hard", topic: "Dimensionality" },
        { text: "Describe how you would approach a classification problem end-to-end.", difficulty: "hard", topic: "Process" },
        { text: "What is the difference between L1 and L2 regularization?", difficulty: "medium", topic: "Regularization" },
        { text: "Explain how a neural network learns through backpropagation.", difficulty: "hard", topic: "Deep Learning" },
        { text: "What is cross-validation? How does k-fold CV reduce overfitting?", difficulty: "medium", topic: "Validation" },
      ]
    },
    devops: {
      label: "DevOps / SRE",
      emoji: "🚀",
      description: "CI/CD, Docker, Kubernetes",
      questions: [
        { text: "Explain the difference between Docker and Kubernetes. When do you need K8s?", difficulty: "medium", topic: "Containers" },
        { text: "What is Infrastructure as Code? Compare Terraform and Ansible.", difficulty: "hard", topic: "IaC" },
        { text: "Describe a CI/CD pipeline you've built. What tools did you use?", difficulty: "medium", topic: "CI/CD" },
        { text: "What is blue-green deployment? How does it differ from canary releases?", difficulty: "hard", topic: "Deployment" },
        { text: "Explain how Prometheus and Grafana work together for monitoring.", difficulty: "medium", topic: "Monitoring" },
        { text: "What is a Kubernetes pod, service, and deployment? How do they relate?", difficulty: "hard", topic: "Kubernetes" },
        { text: "How would you debug a production issue where an API is returning 502 errors?", difficulty: "hard", topic: "Troubleshooting" },
        { text: "What is the 12-factor app methodology?", difficulty: "medium", topic: "Best Practices" },
        { text: "Explain how you would handle secrets management in a production environment.", difficulty: "hard", topic: "Security" },
        { text: "What is SLI, SLO, and SLA? How do they guide reliability engineering?", difficulty: "medium", topic: "SRE" },
      ]
    },
    mobile_dev: {
      label: "Mobile Dev",
      emoji: "📱",
      description: "Android, iOS & React Native",
      questions: [
        { text: "What is the difference between React Native, Flutter, and native app development?", difficulty: "medium", topic: "Cross-Platform" },
        { text: "Explain the Android Activity lifecycle.", difficulty: "medium", topic: "Android" },
        { text: "What is the iOS ViewController lifecycle? How does it map to SwiftUI views?", difficulty: "medium", topic: "iOS" },
        { text: "How do you handle offline-first architecture in mobile apps?", difficulty: "hard", topic: "Architecture" },
        { text: "Explain push notifications: APNs vs FCM.", difficulty: "medium", topic: "Push Notifications" },
        { text: "How do you optimize memory usage in a mobile application?", difficulty: "hard", topic: "Performance" },
        { text: "What is Jetpack Compose in Android? How does it differ from XML layouts?", difficulty: "hard", topic: "Android" },
        { text: "Describe strategies for improving app startup time.", difficulty: "hard", topic: "Performance" },
      ]
    },
    cybersecurity: {
      label: "Cybersecurity",
      emoji: "🔐",
      description: "Security, Ethical Hacking & GRC",
      questions: [
        { text: "Explain the OWASP Top 10 vulnerabilities. How would you prevent SQL injection?", difficulty: "medium", topic: "OWASP" },
        { text: "What is the difference between symmetric and asymmetric encryption?", difficulty: "easy", topic: "Cryptography" },
        { text: "Describe a penetration testing methodology (PTES or OWASP).", difficulty: "hard", topic: "Pen Testing" },
        { text: "What is a zero-day vulnerability? How do companies protect against unknown threats?", difficulty: "hard", topic: "Threat Intel" },
        { text: "Explain how SSL/TLS certificates work. What is certificate pinning?", difficulty: "hard", topic: "Cryptography" },
        { text: "What is the principle of least privilege? How do you implement it in cloud environments?", difficulty: "medium", topic: "IAM" },
        { text: "Describe a social engineering attack. How do you build user awareness?", difficulty: "easy", topic: "Security Awareness" },
        { text: "What is SIEM? How would you set up alerting for suspicious login activity?", difficulty: "hard", topic: "SOC" },
      ]
    },
    cloud_engineer: {
      label: "Cloud Engineer",
      emoji: "☁️",
      description: "AWS, Azure & GCP",
      questions: [
        { text: "Explain AWS S3, EC2, and RDS. When would you use each?", difficulty: "easy", topic: "AWS" },
        { text: "What is auto-scaling in AWS? How does it handle sudden traffic spikes?", difficulty: "medium", topic: "AWS" },
        { text: "Describe the difference between AWS Lambda, ECS, and EKS.", difficulty: "hard", topic: "Compute" },
        { text: "What is a VPC? Explain subnets, route tables, and security groups.", difficulty: "hard", topic: "Networking" },
        { text: "How would you architect a highly available, fault-tolerant system on AWS?", difficulty: "hard", topic: "Architecture" },
        { text: "What is serverless architecture? What are its limitations?", difficulty: "medium", topic: "Serverless" },
        { text: "Explain the shared responsibility model in cloud security.", difficulty: "medium", topic: "Security" },
        { text: "What tools do you use for cloud cost monitoring and optimization?", difficulty: "medium", topic: "FinOps" },
      ]
    },
    ai_ml_engineer: {
      label: "AI/ML Engineer",
      emoji: "🧠",
      description: "LLMs, MLOps & Production AI",
      questions: [
        { text: "Explain how transformer architecture works. What is self-attention?", difficulty: "hard", topic: "Deep Learning" },
        { text: "What is the difference between fine-tuning and RAG for LLM applications?", difficulty: "hard", topic: "LLMs" },
        { text: "Describe an MLOps pipeline from training to production deployment.", difficulty: "hard", topic: "MLOps" },
        { text: "What is model drift? How do you detect and handle it in production?", difficulty: "hard", topic: "Monitoring" },
        { text: "Explain prompt engineering techniques: zero-shot, few-shot, chain-of-thought.", difficulty: "medium", topic: "LLMs" },
        { text: "What is quantization in LLMs? How does it affect performance vs efficiency?", difficulty: "hard", topic: "Optimization" },
        { text: "How would you build a recommendation system for a streaming platform?", difficulty: "hard", topic: "RecSys" },
        { text: "Explain the difference between BERT and GPT architectures.", difficulty: "hard", topic: "NLP" },
      ]
    },
  },

  /* ========== COMPANIES ========== */
  companies: {
    google: {
      label: "Google",
      emoji: "🔍",
      description: "LeetCode + System Design",
      questions: [
        { text: "Design a distributed key-value store like Google Bigtable. What consistency model would you use?", difficulty: "hard", topic: "System Design" },
        { text: "Given an array of integers, find two numbers that sum to a target. (Two Sum) — explain your optimal approach.", difficulty: "easy", topic: "Algorithms" },
        { text: "How would you design Google Maps? Focus on routing and real-time traffic updates.", difficulty: "hard", topic: "System Design" },
        { text: "Explain how PageRank algorithm works.", difficulty: "hard", topic: "Algorithms" },
        { text: "Design a search autocomplete system that handles millions of queries per second.", difficulty: "hard", topic: "System Design" },
        { text: "Given a binary tree, serialize and deserialize it. Explain your approach.", difficulty: "hard", topic: "Trees" },
        { text: "How would you design Google Docs with real-time collaboration?", difficulty: "hard", topic: "System Design" },
        { text: "What is your approach to code reviews? What do you look for?", difficulty: "medium", topic: "Culture" },
      ]
    },
    amazon: {
      label: "Amazon",
      emoji: "📦",
      description: "Leadership Principles + Tech",
      questions: [
        { text: "Tell me about a time you had to make a data-driven decision under uncertainty. (STAR format)", difficulty: "medium", topic: "Leadership Principles" },
        { text: "Design Amazon's product recommendation system. How would you handle cold-start?", difficulty: "hard", topic: "System Design" },
        { text: "Describe a situation where you had to deliver results under a tight deadline.", difficulty: "medium", topic: "Leadership Principles" },
        { text: "How would you design Amazon's inventory management system for 1M+ products?", difficulty: "hard", topic: "System Design" },
        { text: "Tell me about a time you disagreed with your manager. What did you do?", difficulty: "medium", topic: "Leadership Principles" },
        { text: "Design a distributed message queue like Amazon SQS.", difficulty: "hard", topic: "System Design" },
        { text: "How do you think about long-term vs short-term trade-offs in engineering decisions?", difficulty: "medium", topic: "Culture" },
        { text: "What does 'customer obsession' mean to you from a technical perspective?", difficulty: "easy", topic: "Culture" },
      ]
    },
    microsoft: {
      label: "Microsoft",
      emoji: "🪟",
      description: "Azure, .NET & Collaboration",
      questions: [
        { text: "How would you design Microsoft Teams for 100 million concurrent users?", difficulty: "hard", topic: "System Design" },
        { text: "Explain how you would implement undo/redo functionality in a document editor.", difficulty: "hard", topic: "Algorithms" },
        { text: "Describe the difference between Azure Service Bus and Azure Event Hub.", difficulty: "hard", topic: "Azure" },
        { text: "How does garbage collection work in .NET/C#? What is the LOH?", difficulty: "hard", topic: "C# / .NET" },
        { text: "Design an accessible UI component library. What standards would you follow?", difficulty: "medium", topic: "Accessibility" },
        { text: "How would you handle backward compatibility when releasing a breaking API change?", difficulty: "hard", topic: "API Design" },
        { text: "Tell me about a time you improved a team process or culture.", difficulty: "medium", topic: "Culture" },
        { text: "Explain the Azure Resource Manager (ARM) model.", difficulty: "medium", topic: "Azure" },
      ]
    },
    tcs: {
      label: "TCS",
      emoji: "🏢",
      description: "Core IT + HR rounds",
      questions: [
        { text: "Tell me about yourself and why you want to join TCS.", difficulty: "easy", topic: "HR" },
        { text: "Explain the Software Development Life Cycle and its phases.", difficulty: "easy", topic: "SDLC" },
        { text: "What is Agile methodology? How does a Sprint work?", difficulty: "easy", topic: "Agile" },
        { text: "Explain the difference between abstract class and interface in Java.", difficulty: "easy", topic: "Java" },
        { text: "What is a microservices architecture? Give a real-world example.", difficulty: "medium", topic: "Architecture" },
        { text: "How do you handle a situation where you are given an unrealistic deadline?", difficulty: "easy", topic: "HR" },
        { text: "Explain normalization with an example from an e-commerce database.", difficulty: "medium", topic: "DBMS" },
        { text: "What are design patterns? Explain Singleton and Factory patterns.", difficulty: "medium", topic: "Design Patterns" },
        { text: "Where do you see yourself in 5 years? How does TCS fit your goals?", difficulty: "easy", topic: "HR" },
        { text: "Explain cloud computing and its benefits for enterprise clients.", difficulty: "easy", topic: "Cloud" },
      ]
    },
    infosys: {
      label: "Infosys",
      emoji: "🔷",
      description: "Hackwithinfy + HR",
      questions: [
        { text: "What are your strengths and weaknesses as a software engineer?", difficulty: "easy", topic: "HR" },
        { text: "Explain RESTful web services with an example you've built.", difficulty: "medium", topic: "Web Services" },
        { text: "What is the difference between Git merge and Git rebase?", difficulty: "medium", topic: "Git" },
        { text: "Describe the MVC pattern with a real-world application example.", difficulty: "medium", topic: "Architecture" },
        { text: "How would you optimize a slow SQL query? Walk through your process.", difficulty: "hard", topic: "Database" },
        { text: "What is SOLID principle? Give an example of the Single Responsibility Principle.", difficulty: "hard", topic: "Design" },
        { text: "Tell me about a project where you demonstrated ownership.", difficulty: "medium", topic: "HR" },
        { text: "Explain the concept of test-driven development (TDD).", difficulty: "medium", topic: "Testing" },
      ]
    },
    wipro: {
      label: "Wipro",
      emoji: "🌐",
      description: "Aptitude + Technical",
      questions: [
        { text: "Describe a challenging technical problem you solved. What was your approach?", difficulty: "medium", topic: "Behavioral" },
        { text: "What is exception handling in Java/Python? How do you design for resilience?", difficulty: "easy", topic: "Programming" },
        { text: "Explain the concept of API versioning. Why is it important?", difficulty: "medium", topic: "API" },
        { text: "What are the key differences between SQL and NoSQL databases?", difficulty: "easy", topic: "Databases" },
        { text: "Describe your experience with any cloud platform (AWS/Azure/GCP).", difficulty: "medium", topic: "Cloud" },
        { text: "How do you ensure code quality in your team? What processes do you follow?", difficulty: "medium", topic: "Quality" },
        { text: "What is the difference between unit testing and integration testing?", difficulty: "easy", topic: "Testing" },
        { text: "Explain how you would approach learning a new technology quickly.", difficulty: "easy", topic: "Learning" },
      ]
    },
    startup: {
      label: "Startup",
      emoji: "🚀",
      description: "Fast-paced, cross-functional",
      questions: [
        { text: "How do you prioritize features when resources are limited? What framework do you use?", difficulty: "medium", topic: "Product" },
        { text: "Describe a situation where you wore multiple hats. How did you manage it?", difficulty: "easy", topic: "Culture" },
        { text: "How would you build an MVP for a SaaS product in 4 weeks?", difficulty: "hard", topic: "Planning" },
        { text: "Tell me about a time you failed fast and iterated quickly.", difficulty: "medium", topic: "Culture" },
        { text: "How do you measure the impact of a feature you shipped?", difficulty: "medium", topic: "Metrics" },
        { text: "Describe your experience with rapid prototyping or hackathons.", difficulty: "easy", topic: "Experience" },
        { text: "How comfortable are you with ambiguity? Give an example.", difficulty: "medium", topic: "Adaptability" },
        { text: "What's your approach to technical debt in a fast-moving team?", difficulty: "hard", topic: "Engineering" },
      ]
    },
    faang_sde: {
      label: "FAANG SDE",
      emoji: "🌟",
      description: "Meta, Netflix, Apple prep",
      questions: [
        { text: "Design a distributed cache like Memcached or Redis. How do you handle eviction?", difficulty: "hard", topic: "System Design" },
        { text: "Find the longest palindromic substring. Explain DP vs Manacher's algorithm.", difficulty: "hard", topic: "DP" },
        { text: "Design a real-time notification system for 500 million users.", difficulty: "hard", topic: "System Design" },
        { text: "Implement an LRU cache with O(1) get and put operations.", difficulty: "hard", topic: "Data Structures" },
        { text: "How would you design Facebook's news feed ranking system?", difficulty: "hard", topic: "System Design" },
        { text: "Explain the difference between mutex, semaphore, and monitor.", difficulty: "hard", topic: "Concurrency" },
        { text: "Given a graph, find if it contains a cycle. Explain approaches for directed vs undirected.", difficulty: "hard", topic: "Graph Theory" },
        { text: "Design Netflix's video streaming architecture. How do CDNs play a role?", difficulty: "hard", topic: "System Design" },
      ]
    },
  }
};

/* =============================================
   KEYWORD SCORING ENGINE
   Each question has: keywords[] (required terms)
   and guidance{} (answer structure to show)
   ============================================= */
const scoringData = {
  // ---- COURSES: MCA ----
  "Explain the concept of process scheduling in OS. What are the different scheduling algorithms?": {
    keywords: ["scheduling","cpu","process","fcfs","sjf","round robin","priority","preemptive","non-preemptive","queue","burst time","context switch","ready"],
    guidance: ["Define process scheduling and why the CPU needs it.","List and explain key algorithms: FCFS, SJF, Round Robin, Priority.","Compare preemptive vs non-preemptive.","Mention context switching overhead."]
  },
  "What is normalization in DBMS? Explain 1NF, 2NF, and 3NF with examples.": {
    keywords: ["normalization","1nf","2nf","3nf","redundancy","anomaly","functional dependency","primary key","partial dependency","transitive dependency","table","relation"],
    guidance: ["Define normalization and its goal (reduce redundancy).","Explain 1NF: atomic values, no repeating groups.","Explain 2NF: remove partial dependencies on composite key.","Explain 3NF: remove transitive dependencies.","Give a table example for each."]
  },
  "Describe the differences between TCP and UDP protocols.": {
    keywords: ["tcp","udp","connection","reliable","unreliable","handshake","acknowledgment","streaming","packet","latency","ordered","checksum"],
    guidance: ["TCP: connection-oriented, reliable, ordered delivery, uses 3-way handshake.","UDP: connectionless, fast, no guarantee of delivery.","Use cases: TCP → HTTP, email; UDP → video streaming, DNS, gaming.","Mention header size difference."]
  },
  "Explain the concept of Object-Oriented Programming and its four pillars.": {
    keywords: ["encapsulation","inheritance","polymorphism","abstraction","class","object","method","access modifier","interface","overriding","overloading"],
    guidance: ["Define OOP and contrast with procedural programming.","Encapsulation: data hiding, private fields, getters/setters.","Inheritance: code reuse, parent-child relationship.","Polymorphism: same interface, different behavior (overriding/overloading).","Abstraction: hiding implementation details."]
  },
  "Explain deadlock in operating systems. What are the four necessary conditions?": {
    keywords: ["deadlock","mutual exclusion","hold and wait","no preemption","circular wait","resource","starvation","prevention","avoidance","banker","detection"],
    guidance: ["Define deadlock with a real example.","State all four Coffman conditions: mutual exclusion, hold & wait, no preemption, circular wait.","Explain prevention: negate one condition.","Mention Banker's Algorithm for avoidance."]
  },
  // ---- ROLES: FRONTEND ----
  "Explain the virtual DOM in React. How does reconciliation work?": {
    keywords: ["virtual dom","reconciliation","diffing","fiber","real dom","component","re-render","state","key","tree","update","react"],
    guidance: ["Explain what the virtual DOM is (in-memory representation).","Describe how React diffs old vs new virtual DOM trees.","Explain reconciliation: only changed nodes update the real DOM.","Mention React Fiber for prioritized rendering.","Talk about the role of the 'key' prop in lists."]
  },
  "What are React hooks? Explain useState, useEffect, and useContext.": {
    keywords: ["hooks","usestate","useeffect","usecontext","functional component","state","side effect","dependency array","cleanup","context","re-render","lifecycle"],
    guidance: ["Define hooks and why they replaced class lifecycle methods.","useState: managing local component state.","useEffect: side effects (API calls, subscriptions) and cleanup.","useContext: consuming context without prop drilling.","Mention the rules of hooks."]
  },
  "Explain event delegation in JavaScript. Why is it useful?": {
    keywords: ["event delegation","bubbling","propagation","parent","target","listener","performance","dynamic","event","dom"],
    guidance: ["Define event bubbling (events propagate up the DOM tree).","Explain event delegation: attach one listener to parent, detect target.","Why useful: fewer event listeners = better performance.","Works for dynamically added elements.","Give a list/table row click example."]
  },
  // ---- ROLES: BACKEND ----
  "Explain RESTful API design principles. What makes an API truly RESTful?": {
    keywords: ["rest","stateless","resource","http","get","post","put","delete","uri","json","idempotent","status code","uniform interface","cacheable"],
    guidance: ["Define REST and the 6 architectural constraints.","Statelessness: each request is self-contained.","Resource-based URIs (nouns, not verbs).","Proper HTTP verbs and status codes.","Idempotency: GET/PUT are safe to retry."]
  },
  "What is the N+1 query problem in ORMs? How do you solve it?": {
    keywords: ["n+1","orm","query","eager loading","lazy loading","join","include","select n","database","performance","sql","association"],
    guidance: ["Define the N+1 problem: 1 query for list + N queries for each item.","Demonstrate with ORM example (e.g., posts and authors).","Solution 1: eager loading (JOIN/include).","Solution 2: data loaders / batching.","Show the generated SQL difference."]
  },
  // ---- ROLES: DATA ANALYTICS ----
  "Explain window functions in SQL with examples (ROW_NUMBER, RANK, LAG).": {
    keywords: ["window function","row_number","rank","dense_rank","lag","lead","partition by","order by","over","aggregate","frame","running total"],
    guidance: ["Define window functions vs GROUP BY (don't collapse rows).","ROW_NUMBER: unique sequential number per partition.","RANK / DENSE_RANK: ranking with and without gaps.","LAG/LEAD: access previous/next row's value.","Show a practical SQL snippet for each."]
  },
  // ---- COMPANIES ----
  "Tell me about yourself and why you want to join TCS.": {
    keywords: ["background","experience","skills","project","technology","goal","tcs","opportunity","learn","contribute","team","career","passion"],
    guidance: ["Start with your academic background (course, college).","Highlight 1-2 key technical skills or projects.","Bridge to why TCS specifically (scale, domain, culture).","End with your career aspiration and how TCS helps achieve it.","Keep it under 2 minutes, structured and confident."]
  },
  "What is Agile methodology? How does a Sprint work?": {
    keywords: ["agile","sprint","scrum","backlog","iteration","daily standup","retrospective","product owner","story points","user story","kanban","velocity"],
    guidance: ["Define Agile: iterative, incremental delivery over Waterfall.","Explain Scrum roles: Product Owner, Scrum Master, Dev Team.","Sprint lifecycle: planning → daily standup → review → retrospective.","Mention story points and velocity.","Contrast with Kanban briefly."]
  },
  "Design a distributed key-value store like Google Bigtable. What consistency model would you use?": {
    keywords: ["distributed","key-value","consistency","replication","sharding","partition","cap theorem","eventual consistency","strong consistency","raft","paxos","lsm tree","compaction","hashing"],
    guidance: ["Clarify requirements: scale, read/write ratio, consistency needs.","Data model: row key, column families, timestamps.","Sharding strategy: consistent hashing.","Replication for fault tolerance.","Choose consistency model (strong vs eventual) with CAP trade-offs."]
  },
  "Tell me about a time you had to make a data-driven decision under uncertainty. (STAR format)": {
    keywords: ["situation","task","action","result","data","decision","metrics","analysis","outcome","uncertainty","impact","measure"],
    guidance: ["Use the STAR framework explicitly.","Situation: set the context clearly.","Task: what was your responsibility?","Action: what data did you gather and what did you decide?","Result: quantify the outcome (%, time saved, revenue)."]
  }
};

/* =============================================
   ANSWER GUIDANCE DEFINITIONS
   Each topic has a structured answering framework
   ============================================= */
const topicGuidance = {
  "Operating Systems":  ["Define the concept clearly.","Explain how it works step-by-step.","List types or categories with brief descriptions.","Give a real-world example or use case.","Mention trade-offs or edge cases."],
  "DBMS":               ["Define the concept and its purpose.","Explain with a table/schema example.","Describe normal operation and edge cases.","State advantages and limitations."],
  "Networking":         ["Define the protocol/concept.","Explain how it works (request/response flow).","Compare with alternatives.","State practical use cases."],
  "OOP":                ["Define the concept.","Explain with a class/code example.","Describe real-world analogy.","State why it matters in software design."],
  "Data Structures":    ["Define the data structure.","Explain operations: insert, delete, search with complexity.","Draw or describe the structure.","Give real-world use cases."],
  "Algorithms":         ["State what problem the algorithm solves.","Describe the approach step-by-step.","State time and space complexity.","Give an example input/output."],
  "React":              ["Define the concept in React context.","Explain how it works internally.","Give a code snippet or mental model.","State performance or UX implications."],
  "JavaScript":         ["Define the concept.","Explain with a code example.","Describe common pitfalls or gotchas.","State best practices."],
  "CSS":                ["Define the feature.","Show a usage example.","Compare with alternatives.","Mention browser compatibility if relevant."],
  "API Design":         ["Define the principle.","Give a concrete API design example.","Explain trade-offs.","Mention best practices or standards."],
  "System Design":      ["Clarify requirements and scale.","Define data model and storage layer.","Design core components and their interactions.","Address fault tolerance, scaling, and trade-offs."],
  "HR":                 ["Answer honestly and specifically.","Use STAR format for behavioral questions.","Connect your answer to the company's values.","Keep it concise (1-2 minutes)."],
  "Leadership Principles": ["Use the STAR format (Situation, Task, Action, Result).","Be specific — name the project and quantify the result.","Show what you personally did (avoid 'we').","End with what you learned."],
  "Security":           ["Define the concept and its threat model.","Explain how the attack/protection works.","Describe mitigation strategies.","Reference standards (OWASP, NIST) if applicable."],
  "Database":           ["Define the problem.","Explain the root cause.","Describe the solution with SQL or architecture changes.","State performance impact."],
  "Machine Learning":   ["Define the concept mathematically or intuitively.","Explain how it applies in practice.","Give an example algorithm or use case.","Discuss limitations and trade-offs."],
  "default":            ["Define or introduce the concept clearly.","Explain how it works with an example.","Discuss real-world applications or trade-offs.","Conclude with best practices or key takeaways."]
};

/* =============================================
   REAL SCORING ENGINE
   ============================================= */
function scoreAnswer(answerRaw, question) {
  const answer = answerRaw.toLowerCase();
  const words  = answer.split(/\s+/).filter(w => w.length > 2);
  const wordCount = words.length;

  // --- 1. GIBBERISH DETECTION ---
  // Real words: check ratio of valid English-looking tokens
  const validWordPattern = /^[a-z]{2,}$/;
  const validWords = words.filter(w => validWordPattern.test(w));
  const validRatio = words.length > 0 ? validWords.length / words.length : 0;

  // If less than 40% of tokens are real word-shaped strings → gibberish
  const isGibberish = validRatio < 0.40 || wordCount < 5;

  if (isGibberish || wordCount === 0) {
    return {
      total: 0,
      keywordScore: 0,
      lengthScore: 0,
      structureScore: 0,
      matchedKeywords: [],
      missedKeywords: [],
      validRatio: Math.round(validRatio * 100)
    };
  }

  // --- 2. KEYWORD SCORING (50 points max) ---
  const scoring = scoringData[question.text];
  let keywordsForQ = [];
  if (scoring && scoring.keywords) {
    keywordsForQ = scoring.keywords;
  } else {
    // Fall back to extracting key terms from the question itself
    keywordsForQ = question.text
      .toLowerCase()
      .replace(/[^a-z\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 3 && !['what','when','does','that','this','with','from','how','where','which','your','have','make','they','will'].includes(w));
  }

  const matchedKeywords = [];
  const missedKeywords  = [];
  keywordsForQ.forEach(kw => {
    if (answer.includes(kw.toLowerCase())) {
      matchedKeywords.push(kw);
    } else {
      missedKeywords.push(kw);
    }
  });

  const kwMatchRatio  = keywordsForQ.length > 0 ? matchedKeywords.length / keywordsForQ.length : 0;
  const keywordScore  = Math.round(kwMatchRatio * 50);

  // --- 3. LENGTH / DEPTH SCORE (25 points max) ---
  let lengthScore = 0;
  if      (wordCount >= 120) lengthScore = 25;
  else if (wordCount >= 80)  lengthScore = 20;
  else if (wordCount >= 50)  lengthScore = 15;
  else if (wordCount >= 30)  lengthScore = 10;
  else if (wordCount >= 15)  lengthScore = 6;
  else                        lengthScore = 2;

  // --- 4. STRUCTURE SCORE (25 points max) ---
  // Checks for structured writing signals
  let structureScore = 0;
  const rawAnswer = answerRaw;
  if (/\d\.|\*|-|•/.test(rawAnswer))            structureScore += 8;  // bullet/numbered list
  if (/example|e\.g\.|instance|for example/i.test(rawAnswer)) structureScore += 7;  // gave example
  if (/because|therefore|this means|as a result|so that/i.test(rawAnswer)) structureScore += 5; // reasoning
  if (/however|on the other hand|trade-off|compared to|difference/i.test(rawAnswer)) structureScore += 5; // comparison
  structureScore = Math.min(25, structureScore);

  const total = Math.min(100, keywordScore + lengthScore + structureScore);

  return { total, keywordScore, lengthScore, structureScore, matchedKeywords, missedKeywords, validRatio: Math.round(validRatio * 100) };
}

/* =============================================
   STATE MANAGEMENT
   ============================================= */
const state = {
  activeTab: 'courses',
  selectedCategory: null,
  selectedCategoryGroup: null,
  selectedDifficulty: 'all',
  questions: [],
  filteredQuestions: [],
  currentIndex: 0,
  scores: [],
  timer: null,
  timeLeft: 120,
  maxTime: 120,
  sessionStartCategory: null,
};

/* =============================================
   INITIALIZATION
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryGrid('courses', 'coursesGrid');
  renderCategoryGrid('roles', 'rolesGrid');
  renderCategoryGrid('companies', 'companiesGrid');

  initMic();

  const savedUser = localStorage.getItem('twinterview_currentUser');
  if (savedUser) {
    currentUser = savedUser;
    document.getElementById('loginSection').classList.add('hidden');
    showDashboard();
  } else {
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('setupSection').classList.add('hidden');
  }

  // Character counter for textarea
  const textarea = document.getElementById('answer');
  if (textarea) {
    textarea.addEventListener('input', () => {
      document.getElementById('charCount').textContent = `${textarea.value.length} characters`;
    });
  }

  // Resume Upload
  const resumeInput = document.getElementById('resumeInput');
  if (resumeInput) {
    resumeInput.addEventListener('change', handleResumeUpload);
  }
});

function renderCategoryGrid(group, gridId) {
  const grid = document.getElementById(gridId);
  const categories = questionBank[group];
  grid.innerHTML = '';

  Object.entries(categories).forEach(([key, cat]) => {
    const count = cat.questions.length;
    const card = document.createElement('div');
    card.className = 'category-card';
    card.id = `cat-${group}-${key}`;
    card.onclick = () => selectCategory(group, key, card);
    card.innerHTML = `
      <span class="category-emoji">${cat.emoji}</span>
      <div class="category-name">${cat.label}</div>
      <div class="category-count">${count} questions</div>
    `;
    grid.appendChild(card);
  });
}

/* =============================================
   UI INTERACTIONS
   ============================================= */
function switchTab(tab) {
  state.activeTab = tab;

  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

  // Update tab content
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');

  // Deselect current category if switching groups
  if (state.selectedCategoryGroup !== tab) {
    if (state.selectedCategory) {
      const prev = document.getElementById(`cat-${state.selectedCategoryGroup}-${state.selectedCategory}`);
      if (prev) prev.classList.remove('selected');
    }
    state.selectedCategory = null;
    state.selectedCategoryGroup = null;
    updateStartButton();
  }
}

function handleResumeUpload(e) {
  if (!e.target.files || e.target.files.length === 0) return;
  
  document.getElementById('resumeUploadCard').classList.add('hidden');
  document.getElementById('resumeLoading').classList.remove('hidden');
  
  const fill = document.getElementById('loadingBarFill');
  const text = document.getElementById('loadingText');
  let progress = 0;
  fill.style.width = '0%';
  
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 30 && progress < 60) text.textContent = "Analyzing experience...";
    if (progress > 60 && progress < 90) text.textContent = "Generating questions...";
    
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(finishResumeAnalysis, 500);
    }
    fill.style.width = `${progress}%`;
  }, 300);
}

function finishResumeAnalysis() {
  document.getElementById('resumeLoading').classList.add('hidden');
  document.getElementById('resumeSuccess').classList.remove('hidden');
  
  // Create a dynamic resume category
  questionBank.resume = questionBank.resume || {};
  questionBank.resume.custom = {
    label: "Resume Analysis",
    emoji: "📄",
    description: "Tailored to your profile",
    questions: [
      { text: "Walk me through your resume and highlight your most relevant experience.", difficulty: "easy", topic: "HR" },
      { text: "I see several projects on your resume. Which one was the most technically challenging and why?", difficulty: "medium", topic: "HR" },
      { text: "How do the skills listed on your resume translate to the requirements of the role you are targeting?", difficulty: "medium", topic: "HR" },
      { text: "Tell me about a time you had to quickly learn a new technology or tool mentioned in your profile.", difficulty: "medium", topic: "HR" },
      { text: "Can you elaborate on a gap or transition in your work history?", difficulty: "hard", topic: "HR" },
      { text: "What is a project or experience not listed on your resume that you are proud of?", difficulty: "hard", topic: "HR" }
    ]
  };
  
  // Auto-select this category
  state.selectedCategoryGroup = 'resume';
  state.selectedCategory = 'custom';
  updateStartButton();
}

function selectCategory(group, key, cardEl) {
  // Deselect previous
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));

  // Select new
  cardEl.classList.add('selected');
  state.selectedCategory = key;
  state.selectedCategoryGroup = group;
  updateStartButton();
}

function selectDifficulty(diff) {
  state.selectedDifficulty = diff;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-diff="${diff}"]`).classList.add('active');
}

function updateStartButton() {
  const btn = document.getElementById('startBtn');
  btn.disabled = !state.selectedCategory;
}

/* =============================================
   INTERVIEW LOGIC
   ============================================= */
function startInterview() {
  if (!state.selectedCategory) return;

  const group = state.selectedCategoryGroup;
  const key = state.selectedCategory;
  const cat = questionBank[group][key];

  // Filter by difficulty
  let qs = [...cat.questions];
  if (state.selectedDifficulty !== 'all') {
    qs = qs.filter(q => q.difficulty === state.selectedDifficulty);
  }

  if (qs.length === 0) {
    alert('No questions found for this difficulty level. Try selecting "All Levels".');
    return;
  }

  // Shuffle
  qs = qs.sort(() => Math.random() - 0.5).slice(0, Math.min(qs.length, 10));

  state.questions = qs;
  state.filteredQuestions = qs;
  state.currentIndex = 0;
  state.scores = [];
  state.sessionStartCategory = `${cat.emoji} ${cat.label}`;

  // Show interview section
  document.getElementById('setupSection').classList.add('hidden');
  document.getElementById('interviewSection').classList.remove('hidden');
  document.getElementById('feedbackSection').classList.add('hidden');
  document.getElementById('resultsSection').classList.add('hidden');

  // Set category badge
  document.getElementById('categoryLabel').textContent = state.sessionStartCategory;

  loadQuestion();
}

function loadQuestion() {
  const q = state.questions[state.currentIndex];
  const total = state.questions.length;
  const idx = state.currentIndex;

  // Progress
  document.getElementById('progressLabel').textContent = `Question ${idx + 1} of ${total}`;
  document.getElementById('progressFill').style.width = `${((idx) / total) * 100}%`;
  document.getElementById('questionNumber').textContent = `Q${idx + 1}`;

  // Question text with animation
  const questionEl = document.getElementById('questionArea');
  questionEl.style.animation = 'none';
  questionEl.offsetHeight; // reflow
  questionEl.style.animation = '';
  questionEl.textContent = q.text;

  // Tags
  document.getElementById('questionTags').innerHTML = `
    <span class="q-tag ${q.difficulty}">${q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}</span>
    <span class="q-tag topic">${q.topic}</span>
  `;

  // Reset answer
  document.getElementById('answer').value = '';
  document.getElementById('charCount').textContent = '0 characters';

  // Load guidance for this question
  loadGuidance(q);

  // Start timer
  startTimer();
}

function loadGuidance(q) {
  // Determine framework steps
  const topicSteps = topicGuidance[q.topic] || topicGuidance['default'];

  // Render framework steps
  document.getElementById('guidanceFramework').innerHTML = topicSteps.map((step, i) => `
    <div class="gf-step">
      <span class="gf-num">${i + 1}</span>
      <span class="gf-text">${step}</span>
    </div>
  `).join('');

  // Render keyword chips
  const scoring = scoringData[q.text];
  const kwList  = scoring ? scoring.keywords : q.text.toLowerCase().replace(/[^a-z\s]/g,'').split(/\s+/).filter(w => w.length > 3).slice(0, 10);
  document.getElementById('guidanceKeywords').innerHTML = kwList.map(kw =>
    `<span class="kw-chip" id="kwchip-${kw.replace(/\s+/g,'_')}">${kw}</span>`
  ).join('');

  // Add live keyword match bar if not already present
  const kwWrap = document.querySelector('.guidance-keywords-wrap');
  let matchBar = document.getElementById('matchBar');
  if (!matchBar) {
    const bar = document.createElement('div');
    bar.className = 'keyword-match-bar';
    bar.id = 'matchBar';
    bar.innerHTML = `
      <span class="kmb-label">Keyword match:</span>
      <div class="kmb-track"><div class="kmb-fill" id="kmbFill"></div></div>
      <span class="kmb-pct" id="kmbPct">0%</span>
    `;
    kwWrap.appendChild(bar);
  } else {
    document.getElementById('kmbFill').style.width = '0%';
    document.getElementById('kmbPct').textContent = '0%';
  }

  // Ensure guidance body is open
  document.getElementById('guidanceBody').classList.remove('collapsed');
  document.getElementById('guidanceToggleBtn').textContent = '▲';

  // Attach live keyword highlighter to textarea
  const ta = document.getElementById('answer');
  ta.oninput = () => {
    const val = ta.value.toLowerCase();
    document.getElementById('charCount').textContent = `${ta.value.length} characters`;
    // Live keyword match
    let matched = 0;
    kwList.forEach(kw => {
      const chip = document.getElementById(`kwchip-${kw.replace(/\s+/g,'_')}`);
      if (chip) {
        if (val.includes(kw.toLowerCase())) { chip.classList.add('matched'); matched++; }
        else                                 { chip.classList.remove('matched'); }
      }
    });
    const pct = Math.round((matched / kwList.length) * 100);
    document.getElementById('kmbFill').style.width = `${pct}%`;
    document.getElementById('kmbPct').textContent = `${pct}%`;
  };
}

function toggleGuidance() {
  const body = document.getElementById('guidanceBody');
  const btn  = document.getElementById('guidanceToggleBtn');
  body.classList.toggle('collapsed');
  btn.textContent = body.classList.contains('collapsed') ? '▼' : '▲';
}

function startTimer() {
  clearInterval(state.timer);
  state.timeLeft = 120;
  updateTimerDisplay();

  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay();
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      autoSubmit();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(state.timeLeft / 60).toString().padStart(2, '0');
  const secs = (state.timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('timerText').textContent = `${mins}:${secs}`;

  const circle = document.getElementById('timerDisplay');
  circle.classList.remove('warning', 'danger');
  if (state.timeLeft <= 15) {
    circle.classList.add('danger');
  } else if (state.timeLeft <= 45) {
    circle.classList.add('warning');
  }

  // Conic gradient for timer
  const percent = (state.timeLeft / state.maxTime) * 100;
  let color = '#7c3aed';
  if (state.timeLeft <= 15) color = '#ef4444';
  else if (state.timeLeft <= 45) color = '#f59e0b';
  circle.style.background = `conic-gradient(${color} ${percent}%, rgba(255,255,255,0.06) ${percent}%)`;
}

function autoSubmit() {
  const answer = document.getElementById('answer').value.trim();
  if (answer.length === 0) {
    document.getElementById('answer').value = '[No answer provided - time expired]';
  }
  submitAnswer(true);
}

function submitAnswer(isAutoSubmit = false) {
  stopMic();
  clearInterval(state.timer);
  const answer = document.getElementById('answer').value.trim();

  if (!isAutoSubmit && answer.length === 0) {
    document.getElementById('answer').style.borderColor = 'rgba(239,68,68,0.7)';
    setTimeout(() => {
      document.getElementById('answer').style.borderColor = '';
    }, 1500);
    return;
  }

  const q = state.questions[state.currentIndex];
  const answerToScore = (isAutoSubmit && answer === '') ? '' : answer;

  // ---- REAL SCORING ----
  const result = scoreAnswer(answerToScore, q);
  const { total: finalScore, keywordScore, lengthScore, structureScore, matchedKeywords, missedKeywords, validRatio } = result;

  // Derived labels
  const wordCount = answerToScore.split(/\s+/).filter(w => w.length > 0).length;
  const isGibberish = validRatio < 40 || wordCount < 5;

  const clarityLabel  = finalScore >= 80 ? 'Excellent'  : finalScore >= 60 ? 'Good'    : finalScore >= 40 ? 'Average'  : finalScore >= 20 ? 'Needs Work'   : 'Poor';
  const depthLabel    = wordCount >= 120  ? 'Very Detailed' : wordCount >= 70 ? 'Detailed' : wordCount >= 35 ? 'Moderate'  : wordCount >= 15 ? 'Brief' : 'Very Short';
  const structLabel   = structureScore >= 20 ? 'Well Structured' : structureScore >= 10 ? 'Somewhat Structured' : 'Unstructured';

  // Tips
  const tips = {
    easy:   "Structure your answer: Definition → Explanation → Example → Summary.",
    medium: "Back your answer with real-world examples, code snippets, or comparisons.",
    hard:   "Start high-level (what/why), go deep (how), then address trade-offs and edge cases."
  };

  // Missed keywords HTML
  const missedHtml = missedKeywords.length > 0
    ? `<div style="margin-top:8px">
         <div class="guidance-kw-label" style="margin-bottom:6px">❌ Key terms you missed:</div>
         <div class="missed-keywords">${missedKeywords.map(k => `<span class="missed-chip">${k}</span>`).join('')}</div>
       </div>`
    : (isGibberish ? '' : `<div style="margin-top:8px; font-size:0.82rem; color:var(--accent-green)">✅ You covered all key terms!</div>`);

  const scoreClass = finalScore >= 75 ? 'high' : finalScore >= 45 ? 'medium' : 'low';

  state.scores.push({ score: finalScore, question: q.text, difficulty: q.difficulty });

  // ---- RENDER FEEDBACK ----
  document.getElementById('feedbackArea').innerHTML = `
    ${ isGibberish ? `<div class="guidance-warn" style="margin-bottom:16px">⚠️ Your answer appears to be <strong>gibberish or too short</strong> to evaluate. Scores reflect the actual content quality.</div>` : '' }

    <div class="feedback-metrics">
      <div class="metric-card">
        <div class="metric-icon">💬</div>
        <div class="metric-label">Clarity</div>
        <div class="metric-value">${clarityLabel}</div>
      </div>
      <div class="metric-card">
        <div class="metric-icon">📚</div>
        <div class="metric-label">Depth</div>
        <div class="metric-value">${depthLabel}</div>
      </div>
      <div class="metric-card">
        <div class="metric-icon">🧩</div>
        <div class="metric-label">Structure</div>
        <div class="metric-value">${structLabel}</div>
      </div>
    </div>

    <div class="score-breakdown-table">
      <div class="score-breakdown-title">Score Breakdown</div>
      <div class="score-breakdown-row"><span>🔑 Keyword Relevance (50 pts)</span><span>${keywordScore}/50</span></div>
      <div class="score-breakdown-row"><span>📝 Answer Depth (25 pts)</span><span>${lengthScore}/25</span></div>
      <div class="score-breakdown-row"><span>🧩 Answer Structure (25 pts)</span><span>${structureScore}/25</span></div>
    </div>

    <div class="score-bar-wrap">
      <div class="score-title">
        <span>Overall Score</span>
        <span class="score-num">${finalScore}<small>/100</small></span>
      </div>
      <div class="score-track">
        <div class="score-fill ${scoreClass}" id="scoreFill" style="width:0%"></div>
      </div>
    </div>

    ${missedHtml}

    <div class="feedback-tip" style="margin-top:14px">
      <strong>💡 Pro Tip:</strong> ${tips[q.difficulty]}
    </div>
  `;

  document.getElementById('interviewSection').classList.add('hidden');
  document.getElementById('feedbackSection').classList.remove('hidden');
  document.getElementById('feedbackSection').style.animation = 'cardEnter 0.4s ease both';

  setTimeout(() => {
    const fill = document.getElementById('scoreFill');
    if (fill) fill.style.width = `${finalScore}%`;
  }, 100);

  // Update feedback actions
  const isLast = state.currentIndex >= state.questions.length - 1;
  document.querySelector('.feedback-actions').innerHTML = `
    <button class="btn-secondary" onclick="endInterview()">End Session</button>
    <button class="btn-primary" onclick="${isLast ? 'showResults()' : 'nextQuestion()'}">
      ${isLast ? '🏆 See Results' : 'Next Question →'}
    </button>
  `;
}

function nextQuestion() {
  state.currentIndex++;
  document.getElementById('feedbackSection').classList.add('hidden');
  document.getElementById('interviewSection').classList.remove('hidden');
  loadQuestion();
}

function skipQuestion() {
  stopMic();
  state.scores.push({ score: 0, question: state.questions[state.currentIndex].text, difficulty: state.questions[state.currentIndex].difficulty });
  state.currentIndex++;
  if (state.currentIndex >= state.questions.length) {
    showResults();
  } else {
    loadQuestion();
  }
}

function endInterview() {
  showResults();
}

function showResults() {
  clearInterval(state.timer);

  const scores = state.scores;
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b.score, 0) / scores.length) : 0;
  const answered = scores.filter(s => s.score > 0).length;
  const best = scores.length > 0 ? Math.max(...scores.map(s => s.score)) : 0;

  saveScoreToHistory(avgScore);

  // Stats
  document.getElementById('resultsStats').innerHTML = `
    <div class="stat-box">
      <div class="stat-icon">🎯</div>
      <div class="stat-value">${avgScore}<small style="font-size:0.9rem">/100</small></div>
      <div class="stat-label">Avg Score</div>
    </div>
    <div class="stat-box">
      <div class="stat-icon">✅</div>
      <div class="stat-value">${answered}</div>
      <div class="stat-label">Answered</div>
    </div>
    <div class="stat-box">
      <div class="stat-icon">⭐</div>
      <div class="stat-value">${best}</div>
      <div class="stat-label">Best Score</div>
    </div>
  `;

  // Breakdown
  const breakdownRows = scores.map((s, i) => {
    const cls = s.score >= 75 ? 'high' : s.score >= 50 ? 'medium' : 'low';
    const shortQ = s.question.length > 60 ? s.question.substring(0, 60) + '…' : s.question;
    return `
      <div class="breakdown-item" style="animation-delay:${i * 0.06}s">
        <span class="breakdown-q">Q${i + 1}: ${shortQ}</span>
        <span class="breakdown-score ${cls}">${s.score}/100</span>
      </div>
    `;
  }).join('');

  document.getElementById('resultsBreakdown').innerHTML = `
    <div class="breakdown-title">Question Breakdown</div>
    ${breakdownRows}
  `;

  document.getElementById('feedbackSection').classList.add('hidden');
  document.getElementById('interviewSection').classList.add('hidden');
  document.getElementById('resultsSection').classList.remove('hidden');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetAll() {
  clearInterval(state.timer);
  stopMic();
  state.selectedCategory = null;
  state.selectedCategoryGroup = null;
  state.currentIndex = 0;
  state.scores = [];
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('selected'));
  updateStartButton();

  state.scores = [];
  document.getElementById('resultsSection').classList.add('hidden');
  showDashboard();
}

function restartSame() {
  clearInterval(state.timer);
  stopMic();
  state.currentIndex = 0;
  state.scores = [];

  // Re-shuffle questions
  state.questions = [...state.questions].sort(() => Math.random() - 0.5);

  document.getElementById('resultsSection').classList.add('hidden');
  document.getElementById('interviewSection').classList.remove('hidden');
  loadQuestion();
}

/* =============================================
   NEW FEATURES: LOGIN, DASHBOARD, MIC
   ============================================= */
let currentUser = null;
let growthChartInstance = null;
let recognition = null;
let isRecording = false;

function getUsers() {
  const usersRaw = localStorage.getItem('twinterview_users');
  return usersRaw ? JSON.parse(usersRaw) : {};
}

function handleSignUp() {
  const name = document.getElementById('usernameInput').value.trim();
  const pass = document.getElementById('passwordInput').value.trim();
  
  if (!name || !pass) return alert("Please enter both username and password.");
  
  const users = getUsers();
  if (users[name]) {
    return alert("Username already exists. Please login instead.");
  }
  
  users[name] = pass;
  localStorage.setItem('twinterview_users', JSON.stringify(users));
  
  currentUser = name;
  localStorage.setItem('twinterview_currentUser', name);
  
  document.getElementById('loginSection').classList.add('hidden');
  showDashboard();
}

function handleLogin() {
  const name = document.getElementById('usernameInput').value.trim();
  const pass = document.getElementById('passwordInput').value.trim();
  
  if (!name || !pass) return alert("Please enter both username and password.");
  
  const users = getUsers();
  if (!users[name] || users[name] !== pass) {
    return alert("Invalid username or password. If you don't have an account, please click Sign Up.");
  }
  
  currentUser = name;
  localStorage.setItem('twinterview_currentUser', name);
  
  document.getElementById('loginSection').classList.add('hidden');
  showDashboard();
}

function handleSignOut() {
  currentUser = null;
  localStorage.removeItem('twinterview_currentUser');
  
  document.getElementById('usernameInput').value = '';
  document.getElementById('passwordInput').value = '';
  
  document.getElementById('dashboardSection').classList.add('hidden');
  document.getElementById('setupSection').classList.add('hidden');
  document.getElementById('interviewSection').classList.add('hidden');
  document.getElementById('feedbackSection').classList.add('hidden');
  document.getElementById('resultsSection').classList.add('hidden');
  
  if (growthChartInstance) {
    growthChartInstance.destroy();
    growthChartInstance = null;
  }
  
  document.getElementById('loginSection').classList.remove('hidden');
}

function showDashboard() {
  document.getElementById('setupSection').classList.add('hidden');
  document.getElementById('interviewSection').classList.add('hidden');
  document.getElementById('feedbackSection').classList.add('hidden');
  document.getElementById('resultsSection').classList.add('hidden');
  
  document.getElementById('dashboardSection').classList.remove('hidden');
  document.getElementById('dashboardGreeting').textContent = `Welcome back, ${currentUser}!`;
  
  renderGrowthChart();
}

function startNewInterviewFromDashboard() {
  document.getElementById('dashboardSection').classList.add('hidden');
  document.getElementById('setupSection').classList.remove('hidden');
}

function renderGrowthChart() {
  const ctx = document.getElementById('growthChart').getContext('2d');
  
  const historyRaw = localStorage.getItem('twinterview_history_' + currentUser);
  const history = historyRaw ? JSON.parse(historyRaw) : [];
  
  const labels = history.map((h, i) => `Session ${i+1}`);
  const data = history.map(h => h.score);
  
  if (growthChartInstance) {
    growthChartInstance.destroy();
  }
  
  growthChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.length ? labels : ['No Data Yet'],
      datasets: [{
        label: 'Overall Score',
        data: data.length ? data : [0],
        borderColor: '#7c3aed',
        backgroundColor: 'rgba(124, 58, 237, 0.2)',
        borderWidth: 3,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  });
}

function saveScoreToHistory(score) {
  if (!currentUser) return;
  const historyRaw = localStorage.getItem('twinterview_history_' + currentUser);
  const history = historyRaw ? JSON.parse(historyRaw) : [];
  history.push({ date: new Date().toISOString(), score: score });
  localStorage.setItem('twinterview_history_' + currentUser, JSON.stringify(history));
}

function initMic() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn("Speech recognition not supported in this browser.");
    return;
  }
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  
  recognition.onresult = (event) => {
    let finalTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
    }
    if (finalTranscript) {
      const ta = document.getElementById('answer');
      ta.value += (ta.value ? ' ' : '') + finalTranscript;
      ta.dispatchEvent(new Event('input')); // trigger character count update
    }
  };
  
  recognition.onerror = (e) => {
    console.error(e);
    stopMic();
  };
  
  recognition.onend = () => {
    if (isRecording) {
      try { recognition.start(); } catch(e){}
    }
  };
}

function toggleMic() {
  if (!recognition) return alert('Speech recognition not supported in your browser.');
  const btn = document.getElementById('micBtn');
  if (isRecording) {
    stopMic();
  } else {
    isRecording = true;
    try { recognition.start(); } catch(e){}
    btn.classList.add('recording');
  }
}

function stopMic() {
  isRecording = false;
  if (recognition) recognition.stop();
  const btn = document.getElementById('micBtn');
  if (btn) btn.classList.remove('recording');
}