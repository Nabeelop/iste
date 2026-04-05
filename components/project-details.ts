export interface ProjectStructuredDetail {
  about?: string;
  mentors: string[];
  mentees: string[];
  problem?: string;
  objectives?: string[];
  methodology?: string[];
  outcomes?: string[];
  futureScope?: string[];
  budget?: string;
  components?: Array<{ name: string; cost?: string }>;
}

export const projectDetailsBySlug: Record<string, ProjectStructuredDetail> = {
  "saline-beacon": {
    mentors: ["Jonathan James", "Adhil Ali", "Ivine Binu"],
    mentees: ["John Jacob", "Yallapa H.U", "Aysha K.C"],
    problem:
      "Off-grid and emergency scenarios need affordable, safe lighting alternatives to costly disposable batteries.",
    objectives: [
      "Design a low-cost portable saltwater-powered lamp",
      "Reach around 50 lumens with 6-hour runtime",
      "Reduce electrode corrosion and improve safety",
    ],
    methodology: [
      "Test Zn/Cu and Mg/C electrode combinations",
      "Implement high-efficiency buck/boost driver",
      "Build waterproof enclosure with replaceable cartridges",
      "Validate voltage and capacity in series/parallel setups",
    ],
    outcomes: [
      "Functional saltwater lamp prototype",
      "Replaceable cartridge architecture",
      "Safety and durability validation for field use",
    ],
    futureScope: [
      "Pilot deployment in disaster-prone regions",
      "Modular cartridge improvements",
      "Multi-cell packs for charging small devices",
    ],
    budget: "Rs. 3,200",
    components: [
      { name: "Container", cost: "Rs. 1,300" },
      { name: "Electrodes", cost: "Rs. 1,000" },
      { name: "Electrolytes", cost: "Rs. 200" },
      { name: "LED", cost: "Rs. 200" },
      { name: "Circuitry", cost: "Rs. 500" },
    ],
  },
  "real-time-health-monitoring-pinn-hypernetwork": {
    mentors: ["Rohit Singh", "Yash Jain", "Neha Ojha"],
    mentees: ["Abhishek Mahato", "Diya Zacharia", "Rudransh Pandey"],
    problem:
      "Energy-intensive process industries lose substantial thermal energy, reducing efficiency and increasing carbon impact.",
    objectives: [
      "Model waste heat streams in industrial processes",
      "Design and simulate ORC in DWSIM",
      "Run techno-economic analysis with payback and NPV metrics",
    ],
    methodology: [
      "Baseline process simulations in DWSIM",
      "Working-fluid screening for ORC performance",
      "Parametric optimization over key temperatures",
      "Economic evaluation using Excel/Matlab",
    ],
    outcomes: [
      "Validated simulation with strong efficiency range",
      "Optimal fluid recommendations",
      "Financial feasibility evaluation",
    ],
    futureScope: [
      "Dynamic load-response modeling",
      "Hybrid renewable integration",
      "Life cycle environmental analysis",
    ],
    budget: "Rs. 0 (software project)",
  },
  "waste-heat-recovery-orc": {
    mentors: ["Sanjo Kedavath", "Dathu Vikas", "Shubhank Hiremath"],
    mentees: ["Soumili Dey", "Antara Dongre", "Chowhan Deepak"],
    problem:
      "Heat exchangers face fouling and efficiency loss, while non-intrusive internal monitoring is difficult with conventional sensing.",
    objectives: [
      "Develop PINN-based digital twin for heat exchanger",
      "Use hypernetwork to map boundary conditions to model weights",
      "Enable real-time internal temperature estimation",
    ],
    methodology: [
      "Generate datasets across boundary conditions",
      "Train hypernetwork for PINN parameter prediction",
      "Deploy inference pipeline from sensor inputs",
      "Validate against simulated plant conditions",
    ],
    outcomes: [
      "Low-error real-time prediction pipeline",
      "Early fouling and efficiency-drop detection",
      "Predictive maintenance dashboard readiness",
    ],
    futureScope: [
      "Extend to boilers, condensers and reactors",
      "Integrate with IoT fleet monitoring",
    ],
    budget: "Rs. 0 (software project)",
  },
  "real-time-ai-cfd-hazard-detection": {
    mentors: ["Kshama Rai", "Garima Yadav", "Shanul Haque"],
    mentees: ["Pranjali Vishwakarma", "Greeshma Prabhu", "Nandini Eswaran"],
    problem:
      "Chemical plants require proactive anomaly detection and propagation prediction to avoid incident escalation.",
    objectives: [
      "Detect hazards from integrated sensor streams",
      "Predict hazard evolution with CFD-trained AI",
      "Trigger early warning alarms",
      "Visualize events in 3D operations dashboard",
    ],
    methodology: [
      "Run CFD for leak and flow-disturbance scenarios",
      "Build labeled normal and hazard datasets",
      "Train ML models for signature detection and severity",
      "Deploy real-time Streamlit monitoring dashboard",
    ],
    outcomes: [
      "Working AI hazard detection stack",
      "Interactive 3D hazard visualization",
      "Integrated CFD plus AI inference demo",
    ],
    futureScope: [
      "Generalize to refineries and gas storage",
      "Increase geometry and process complexity",
      "Integrate real plant sensor feeds",
    ],
    budget: "Rs. 0 (software project)",
  },
  "autonomous-navigation-robot": {
    mentors: ["Kaif", "Nisha", "Venkatesh"],
    mentees: ["Chinmay", "Sanjeetha", "Aditya Khankar", "Shreyash"],
    problem:
      "Indoor autonomous navigation needs robust mapping, localization and planning in unknown environments.",
    objectives: [
      "Implement SLAM-capable mobile robot",
      "Fuse LiDAR, encoder and IMU with EKF",
      "Perform autonomous planning and obstacle avoidance",
      "Build ROS-based prototype",
    ],
    methodology: [
      "2D LiDAR GMapping with ROS",
      "EKF-based localization stack",
      "Global and local navigation planners",
      "Simulation plus real environment validation",
    ],
    outcomes: [
      "Unknown-space mapping",
      "Accurate fused localization",
      "Reliable autonomous obstacle avoidance",
    ],
    futureScope: [
      "3D sensing and dynamic replanning",
      "Multi-robot coordination",
      "Warehouse and delivery deployment",
    ],
    budget: "Rs. 16,000",
    components: [
      { name: "YDLiDAR G2 2D LiDAR", cost: "Rs. 10,000" },
      { name: "Raspberry Pi 4", cost: "Rs. 6,000" },
    ],
  },
  "gesture-controlled-bluetooth-speaker": {
    mentors: ["Vinay", "Mahadev", "Shreesha", "Siri"],
    mentees: ["Aditya Khankar", "Devendranath Reddy", "Partha Sarathi", "Vrushank"],
    problem:
      "Touch-based audio interfaces are inconvenient in hygiene-sensitive and accessibility-focused use cases.",
    objectives: [
      "Build fully gesture-controlled portable speaker",
      "Run vision gesture recognition on ESP32-CAM",
      "Deploy lightweight on-device ML",
      "Use AVRCP for playback controls",
    ],
    methodology: [
      "Collect and label gesture dataset",
      "Train CNN with TFLite/Edge Impulse",
      "Deploy inference to ESP32-CAM",
      "Integrate hardware enclosure and audio module",
    ],
    outcomes: [
      "Gesture-based playback control prototype",
      "On-device inference with high practical accuracy",
    ],
    futureScope: [
      "Voice plus gesture multimodal control",
      "Smart-home control integration",
      "Expanded datasets for robustness",
    ],
    budget: "Rs. 3,100-3,500",
    components: [
      { name: "ESP32-CAM modules (x2)", cost: "Rs. 1,600" },
      { name: "Bluetooth speaker module", cost: "Rs. 1,500" },
    ],
  },
  "risc-v-multicore-processor": {
    mentors: ["Vaishnav K", "Sowmith"],
    mentees: ["Rihan", "Sai Abhinay", "Sanjeetha", "Rhea Mishra", "Neria"],
    problem:
      "Students need practical exposure to multicore processor architecture, pipelining, FPU and FPGA prototyping.",
    objectives: [
      "Design multicore RISC-V in Verilog",
      "Integrate F-extension floating point support",
      "Implement SIMD-style matrix ops",
      "Prototype with UART communication",
    ],
    methodology: [
      "ISA and architecture study",
      "Datapath, pipeline and hazard handling design",
      "Multicore dispatcher and shared memory protocol",
      "Simulation and FPGA validation",
    ],
    outcomes: [
      "Functional multicore processor prototype",
      "Verified FPU and matrix acceleration",
      "FPGA demonstration with UART",
    ],
    futureScope: [
      "Cache hierarchy enhancements",
      "Compiler support for high-level toolchains",
      "Benchmarking against mainstream architectures",
    ],
    budget: "Rs. 200-300",
    components: [{ name: "CP2102 USB-UART converter", cost: "Rs. 200-300" }],
  },
  "offline-speech-to-speech-translator-fpga": {
    mentors: ["Kshitij", "Hafiz", "Manan"],
    mentees: ["Rafiq", "Swetha", "Sharan"],
    problem:
      "Offline speech translation is needed for low-connectivity environments and embedded assistive systems.",
    objectives: [
      "Build full offline speech translator on FPGA plus MCU/SoC",
      "Execute DSP front-end on FPGA",
      "Run lightweight ASR/MT/TTS on MCU",
      "Achieve near real-time phrase translation",
    ],
    methodology: [
      "Implement FFT and Mel pipeline",
      "Integrate ASR/MT/TTS inference stack",
      "Design FPGA to MCU protocol",
      "Validate complete speech input to translated output flow",
    ],
    outcomes: [
      "Functioning offline translation demo",
      "Demonstrated FPGA DSP plus embedded ML workflow",
      "Low-latency phrase translation",
    ],
    futureScope: [
      "Additional languages and continuous speech",
      "Improved TTS naturalness and ASR quality",
      "Improved UI layers",
    ],
    budget: "Rs. 800-1,200",
    components: [
      { name: "WM8731 audio codec", cost: "Rs. 500-700" },
      { name: "Microphone or speaker", cost: "Rs. 300-500" },
    ],
  },
  "aes-256-encryption-system": {
    mentors: ["Vishal", "Nitish", "Rishi"],
    mentees: ["Pratheek", "Rohini", "Aditya Mondel", "Shreyash"],
    problem:
      "Students need practical cryptography implementation experience beyond theory.",
    objectives: [
      "Implement AES-256 in Python",
      "Build full transformation chain and key expansion",
      "Validate against standard cryptography libraries",
      "Create CLI utility for text and file encryption",
    ],
    methodology: [
      "Implement SubBytes, ShiftRows, MixColumns, AddRoundKey",
      "Implement 14-round key schedule",
      "Build encrypt/decrypt modules",
      "Cross-check with PyCryptodome/OpenSSL",
    ],
    outcomes: [
      "Functional AES-256 implementation",
      "Educational visualization of internal workflow",
      "Usable command-line tool",
    ],
    futureScope: [
      "CBC/CTR/GCM and authenticated modes",
      "NumPy/C acceleration",
      "FPGA and hardware ports",
      "GUI secure tools",
    ],
    budget: "Rs. 0 (software project)",
  },
  "a-day-in-the-life": {
    mentors: ["Nisha", "Arjun", "Ivine", "Siddarthan"],
    mentees: ["Dhilleswari", "Jeevani", "Deekshitha"],
    about:
      "Interactive web-based visual novel on NITK student life with branching narratives and multiple endings.",
    outcomes: [
      "Engaging digital storytelling experience",
      "Conversation starter around academic and social challenges",
      "Hands-on narrative and interaction design practice",
    ],
    budget: "Components required: None",
  },
  "feud-escape": {
    mentors: ["Aaryan", "Sahitya", "Johan", "Priyanshu"],
    mentees: ["Sanjeev", "Kalyani", "Soumili"],
    about:
      "Competitive event blending Family Feud speed rounds with a puzzle-based escape room sequence.",
    outcomes: [
      "Higher student engagement through hybrid event design",
      "Critical reasoning and teamwork under pressure",
      "Event operations and leadership practice for juniors",
    ],
    budget: "Rs. 3,000",
    components: [
      { name: "Printing", cost: "Rs. 1,000" },
      { name: "Stickers", cost: "Rs. 1,000" },
      { name: "Color markers", cost: "Rs. 1,000" },
    ],
  },
  "isteverse-sequel": {
    mentors: ["Hima", "Yash", "Ronak", "Bhavya"],
    mentees: ["Sanjeev", "Kalyani", "Soumili"],
    about:
      "AI-assisted visual comic showcasing all SIG identities through mascot-driven world-building and narrative.",
    methodology: [
      "Use Leonardo AI, ChatGPT and Canva for story and visuals",
      "Build digital and print-ready outputs",
    ],
    outcomes: [
      "Promotional storytelling asset for club outreach",
      "Practical skill development in prompt and visual design",
    ],
    budget: "Rs. 2,000",
    components: [{ name: "Printing", cost: "Rs. 2,000" }],
  },
  "short-film": {
    mentors: ["Hafiz", "Chinmay", "Kaif"],
    mentees: ["Alphin", "Hitee", "Kruthika"],
    about:
      "Short narrative film project covering end-to-end production from ideation to post.",
    objectives: [
      "Develop practical filming, lighting, sound and editing workflows",
      "Deliver exhibition-ready final cut",
    ],
    outcomes: [
      "Strong production pipeline experience",
      "Advanced VFX and sound design practice",
    ],
    budget: "Rs. 2,000",
    components: [
      { name: "Costume alterations", cost: "Rs. 1,000" },
      { name: "Poster and miscellaneous", cost: "Rs. 1,000" },
    ],
  },
  "aircraft-bearing-bracket": {
    mentors: ["Gulzaar", "Jeeva", "Kailash"],
    mentees: ["Ishita", "Kruthika", "Shubham"],
    about:
      "Simulation-focused aircraft bracket redesign with topology optimization and modal analysis.",
    objectives: [
      "Reduce bracket mass while preserving structural reliability",
      "Use modal behavior for structural health checks",
    ],
    methodology: [
      "CAD model with optimization space definition",
      "Static and topology optimization in ANSYS",
      "Modal comparison pre and post optimization",
      "Material comparison for aerospace alloys",
    ],
    budget: "Simulation project (tools required)",
    components: [
      { name: "ANSYS 2025" },
      { name: "Fusion 360 / SolidWorks" },
    ],
  },
  "fire-fighting-robot": {
    mentors: ["Tejaswini", "Nitesh", "Johan", "Siddharth"],
    mentees: ["Abhinandan", "Aditya"],
    about:
      "Autonomous fire-response robot with sensing, navigation and pump-nozzle actuation.",
    objectives: [
      "Detect flame and temperature anomalies",
      "Navigate with obstacle avoidance",
      "Aim and spray through servo nozzle",
      "Provide manual override mode",
    ],
    methodology: [
      "Arduino-based control stack",
      "Flame and IR trigger logic",
      "Ultrasonic obstacle handling",
      "Servo-directed spray mechanism",
    ],
    budget: "Rs. 11,500",
    components: [
      { name: "Chassis", cost: "Rs. 2,300" },
      { name: "DC motors and gearheads", cost: "Rs. 2,000" },
      { name: "Wheels", cost: "Rs. 1,200" },
      { name: "Mini water pump", cost: "Rs. 1,500" },
      { name: "Nozzle and aiming servo", cost: "Rs. 900" },
      { name: "Li-Po battery", cost: "Rs. 2,000" },
      { name: "Misc mounts and fasteners", cost: "Rs. 1,000" },
    ],
  },
  "autonomous-delivery-drone": {
    mentors: ["Ashmit", "Srujan", "Wrick"],
    mentees: ["Yaagh", "Azeem", "Sreenandh"],
    about:
      "GPS-based autonomous delivery quadcopter optimized for short-range campus operations.",
    objectives: [
      "Autonomous navigation and route following",
      "Obstacle-aware flight path",
      "Servo-actuated payload drop",
    ],
    methodology: [
      "Airframe design and payload analysis",
      "Pixhawk plus Raspberry Pi integration",
      "LiDAR/rangefinder-based obstacle sensing",
      "Mission Planner tuning and field tests",
    ],
    budget: "Rs. 14,500",
    components: [
      { name: "Drone frame", cost: "Rs. 3,000" },
      { name: "Propellers", cost: "Rs. 1,000" },
      { name: "Landing gear", cost: "Rs. 2,000" },
      { name: "Payload servo mechanism", cost: "Rs. 1,000" },
      { name: "Battery mounting and dampers", cost: "Rs. 5,000" },
      { name: "Misc and printed mounts", cost: "Rs. 2,500" },
    ],
  },
  airship: {
    mentors: ["Rajitha", "Aditya", "Veeresh"],
    mentees: ["Yashika", "Gamana", "Om"],
    about:
      "Helium indoor airship for silent surveillance with live ESP32-CAM streaming.",
    objectives: [
      "Build remotely controlled lighter-than-air system",
      "Deliver real-time video stream",
      "Ensure safe low-noise long-duration indoor operation",
    ],
    methodology: [
      "Buoyancy and weight budget calculations",
      "Envelope, frame and gondola CAD",
      "Fabrication and electronics integration",
      "Control server programming and flight tests",
    ],
    budget: "Rs. 11,500",
    components: [
      { name: "Mylar envelope", cost: "Rs. 2,000" },
      { name: "Carbon-fiber rods", cost: "Rs. 1,000" },
      { name: "3D printed gondola", cost: "Rs. 2,000" },
      { name: "Propulsion mounts and bearings", cost: "Rs. 1,000" },
      { name: "Electronics contingency", cost: "Rs. 3,000" },
      { name: "Misc and printed mounts", cost: "Rs. 2,500" },
    ],
  },
  motogp: {
    mentors: ["Manoj", "Ruthvik", "Dinesh", "Vivek"],
    mentees: ["Shubham", "Anagha", "Raghava"],
    about:
      "Simulation-first MotoGP race bike concept emphasizing CAD, aerodynamics and structural reliability.",
    objectives: [
      "Design competition-compliant race bike concept",
      "Validate performance and structural integrity through simulation",
    ],
    methodology: [
      "Detailed CAD of chassis, fairing and subsystems",
      "CFD optimization for drag/lift/stability",
      "Structural and handling studies",
      "Rules compliance and iterative refinement",
    ],
  },
  neoleg: {
    mentors: ["Vinay", "Bhoomika", "Rishita", "Shreyas", "Shrujan"],
    mentees: ["Shravani", "Siddharth", "Param", "Shamik"],
    about:
      "Passive lower-limb exoskeleton concept to reduce load without motors/electronics.",
    objectives: [
      "Reduce physical load during walk/lift tasks",
      "Align mechanism with human joint biomechanics",
    ],
    methodology: [
      "Biomechanics and joint range studies",
      "CAD design for multi-joint alignment",
      "Static and dynamic simulation for comfort/load transfer",
      "Validated concept and drawing package",
    ],
    budget: "Rs. 15,000",
    components: [
      { name: "Aluminium frame rods", cost: "Rs. 2,000" },
      { name: "Carbon-fiber or alloy rods", cost: "Rs. 1,000" },
      { name: "3D printed joints and brackets", cost: "Rs. 2,000" },
      { name: "Bearings and bushings", cost: "Rs. 1,000" },
      { name: "Fasteners", cost: "Rs. 3,000" },
      { name: "Straps and buckles", cost: "Rs. 2,500" },
      { name: "Foam ergonomics", cost: "Rs. 500" },
      { name: "Springs and elastic bands", cost: "Rs. 2,500" },
      { name: "Misc consumables", cost: "Rs. 500" },
    ],
  },
  "pavement-condition-index-ml": {
    mentors: ["Tushar", "Piyush", "Vijay"],
    mentees: [],
    problem:
      "Manual PCI assessment is resource-heavy, subjective and expensive for large road networks.",
    objectives: [
      "Preprocess traffic, climate and distress datasets",
      "Train ML models for PCI prediction",
      "Automate segment classification into quality categories",
      "Integrate outputs in GIS decision workflow",
    ],
    methodology: [
      "Data engineering with distress, traffic and climate features",
      "Regression models: RF, GBM, XGBoost, LSTM",
      "Classification models: SVM, DT, RF",
      "Evaluate with RMSE/MAE and classification metrics",
    ],
    outcomes: [
      "Streamlit interface for non-technical users",
      "Automated PCI analytics for proactive maintenance",
    ],
    futureScope: [
      "IoT sensor data integration",
      "Satellite imagery and deep learning extensions",
    ],
    budget: "NIL",
  },
  "earthquake-waveform-prediction-building-safety-ml": {
    mentors: ["Sushanth", "Amarnath", "Charan", "Darshan"],
    mentees: [],
    problem:
      "Conventional monitoring lacks practical prescriptive safety advice and low-cost structural assessment tools.",
    objectives: [
      "Build low-cost warning and structural safety tool",
      "Predict PGA/PGV and representative waveforms",
      "Assess safety via IS 1893 and IS 456 checks",
      "Provide immediate safe/unsafe guidance",
    ],
    methodology: [
      "Process IRIS/FDSN seismic data with ObsPy",
      "Train regression and sequence models for seismic prediction",
      "Compute code-based base shear and capacity checks",
      "Deploy interactive low-cost web app",
    ],
    outcomes: [
      "Seismic parameter prediction with actionable interface",
      "Practical safety verdict system",
    ],
    futureScope: [
      "Global scale dataset expansion",
      "IoT vibration monitoring integration",
      "Additional structural indicators and adaptive learning",
    ],
    budget: "NIL",
  },
  "isolated-rc-footing-improved-soil": {
    mentors: ["Ayush", "Aarshi", "Gajendra", "Sanjana"],
    mentees: [],
    problem:
      "Weak soils increase settlement and reduce bearing capacity, often forcing expensive deep foundations.",
    objectives: [
      "Quantify property improvements after mineral packing optimization",
      "Compute bearing and settlement for normal versus improved soils",
      "Compare isolated footing design performance on both",
    ],
    methodology: [
      "Soil and compaction/strength testing",
      "Particle packing analysis with sieve data and EMMA",
      "Stabilization and curing process",
      "IS 6403 plus structural software-based design checks",
    ],
    outcomes: [
      "Evidence of stabilization benefits",
      "Cost-efficient alternative to deep foundations",
      "Comparative design report",
    ],
    futureScope: [
      "Alternative admixture testing",
      "Raft/pile extension studies",
      "Lifecycle cost assessment at scale",
    ],
    budget: "NIL",
  },
  "seismic-hazard-zonation-nw-himalaya": {
    mentors: ["Sahitya", "Shreyas", "Vinit"],
    mentees: [],
    problem:
      "Macro-scale seismic maps do not capture local risk variations in complex NW Himalayan tectonics.",
    objectives: [
      "Refine zonation with data-driven clustering",
      "Identify hotspot and fault-sensitive regions",
      "Study depth/fault proximity relationships",
    ],
    methodology: [
      "Catalog cleaning and fault digitization in QGIS",
      "Feature normalization and fault distance engineering",
      "K-Means clustering with elbow method",
      "Gutenberg-Richter analysis by cluster",
    ],
    outcomes: [
      "Refined seismic hazard map",
      "Cluster-level sensitivity insights",
      "Code-aligned planning recommendations",
    ],
    futureScope: [
      "Real-time seismic feed integration",
      "Geodetic data coupling",
      "Scaling to wider Himalayan regions",
    ],
    budget: "NIL",
  },
  "the-final-semester": {
    mentors: ["Create SIG Mentors Team"],
    mentees: ["Create SIG Mentees Team"],
    about:
      "2D pixel survival game built around NITK campus map with exploration, combat and AI enemies.",
    objectives: [
      "Build engaging campus game experience",
      "Implement combat, stamina and inventory systems",
      "Create patrol/chase/attack enemy behaviors",
    ],
    methodology: [
      "Unity Tilemap world based on campus zones",
      "Sprite animation and behavior scripts",
      "UI flow for menu, pause and game-over states",
    ],
    outcomes: [
      "Playable PC/web demo prototype",
      "Strong practical gameplay systems implementation",
    ],
    futureScope: [
      "Multiplayer mode",
      "Expanded map coverage",
      "A-star pathfinding enhancements",
      "Mobile builds",
    ],
    budget: "Rs. 0 (software project)",
  },
  "artin-indian-art-textiles": {
    mentors: ["Create SIG Mentors Team"],
    mentees: ["Create SIG Mentees Team"],
    about:
      "No-code interactive archive for Indian arts and textiles designed for public learning and engagement.",
    objectives: [
      "Create digital archive with interactive learning",
      "Mentor juniors in UI/UX and no-code workflows",
      "Ship responsive v1 within semester timeline",
    ],
    methodology: [
      "Category research and content curation",
      "Wireframes, user flows and design system",
      "High fidelity design and Framer implementation",
      "Usability tests and mobile optimization",
    ],
    outcomes: [
      "Working beta with core categories",
      "Improved mentee design and prototyping skills",
    ],
    futureScope: [
      "More regional content",
      "Multilingual support",
      "Artisan commerce integration",
      "Mobile app version",
    ],
    budget: "Rs. 0 (software project)",
  },
  "escape-room-3d-puzzle-game": {
    mentors: ["Create SIG Mentors Team"],
    mentees: ["Create SIG Mentees Team"],
    about:
      "3D mystery escape game in Unity with puzzle logic, interaction and cinematic presentation.",
    objectives: [
      "Create playable 3D puzzle escape experience",
      "Implement interaction, movement and puzzle pipeline",
      "Integrate animation, audio and interface layers",
    ],
    methodology: [
      "Environment and room construction",
      "Controller and camera systems",
      "Item interaction and door logic",
      "Gameplay testing and polish",
    ],
    outcomes: [
      "Working prototype with room transitions",
      "Improved Unity/C# and level design capability",
    ],
    futureScope: [
      "Expanded content library",
      "Wider language support",
      "Cross-platform mobile release",
    ],
    budget: "Rs. 0 (software project)",
  },
  "industry-disruption-analysis": {
    mentors: ["Mithul", "Chethana", "Hriday"],
    mentees: ["Atharva Banni", "Akhand Bhardwaj", "P Deekshith", "Bharath Chowdary KB", "Achutha P"],
    problem:
      "Industry disruption is often evaluated using subjective frameworks rather than continuously updated quantitative systems.",
    objectives: [
      "Build Quantitative Disruption Index",
      "Automate disruption assessment pipeline",
      "Forecast technology shift with diffusion models",
      "Visualize results in executive dashboard",
    ],
    methodology: [
      "Define QDI metrics across market and innovation factors",
      "Forecast adoption trends and disruption susceptibility",
      "Build comparative disruption charting",
      "Deploy Tableau/Power BI with drill-down analytics",
    ],
    outcomes: [
      "Validated index across sectors",
      "Competitive intelligence report",
      "Actionable disruptor and risk identification",
    ],
    futureScope: [
      "Multi-industry global mapping",
      "Real-time auto-refresh monitoring platform",
    ],
    budget: "NIL",
  },
  "futuristic-stock-market-index": {
    mentors: ["Hriday Jain", "Mithul", "Aditya Jyothir", "Aksheet"],
    mentees: ["Tejasva Pandey", "Vaibhav Porwal", "Jay", "Adi Nahata", "Aditi"],
    problem:
      "Legacy indices underrepresent emerging innovation-led sectors and deep-tech growth.",
    objectives: [
      "Create innovation-driven index methodology",
      "Select representative future-sector companies",
      "Backtest versus NIFTY and Sensex",
      "Build live tracking dashboard",
    ],
    methodology: [
      "Sector and company shortlisting",
      "Weighting strategy design",
      "Live API ingestion for index computation",
      "Performance backtesting and trend validation",
    ],
    outcomes: [
      "Future-oriented index with transparent rationale",
      "Usable comparative analytics dashboard",
    ],
    futureScope: [
      "Thematic sub-indices",
      "ML-assisted rebalancing",
      "Public investor-facing web tool",
    ],
    budget: "NIL",
  },
  "ai-powered-fintech-investment-intelligence": {
    mentors: ["Shreya Nyamati", "Lalima Singh", "Abhimanyu Binu", "Vinay Kotwani"],
    mentees: ["Pranav Shaji", "Achutha P"],
    problem:
      "Investors need unified intelligence combining fundamentals, technicals and sentiment in one workflow.",
    objectives: [
      "Deliver AI-based investment recommendations",
      "Unify financial and behavioral signals",
      "Provide risk profiling and forecasting",
      "Present insights through interactive dashboards",
    ],
    methodology: [
      "Collect and preprocess market datasets",
      "Build forecasting and risk models",
      "Use NLP for sentiment signals",
      "Visualize alerts and portfolio analytics",
    ],
    outcomes: [
      "Functional investment intelligence platform",
      "Improved trend and risk insight delivery",
      "Personalized recommendation capability",
    ],
    futureScope: [
      "Alternative assets and crypto support",
      "Real-time volatility/sentiment alerts",
      "Automated rebalancing",
    ],
    budget: "NIL",
  },
  "dynamic-dcf-modeling-ou-monte-carlo": {
    mentors: ["Bhavya Saini", "Hridya Jain", "Anantha Krishnan", "Chethana Ramesh", "Ashmit Singhal"],
    mentees: ["Atharva Banni", "Harsh Vardhan", "Shashank", "Shamik Neendoor", "Adi Nahata"],
    problem:
      "Static discount-rate DCF models do not capture mean-reverting rates, shocks and uncertainty.",
    objectives: [
      "Implement OU-based dynamic DCF",
      "Estimate OU parameters from historical data",
      "Run Monte Carlo rate-path simulations",
      "Integrate VaR/CVaR and confidence analytics",
    ],
    methodology: [
      "Historical rate ingestion and preprocessing",
      "OU equation implementation with MLE calibration",
      "Monte Carlo engine construction",
      "Comparison against static DCF baseline",
    ],
    outcomes: [
      "Uncertainty-aware valuation distribution",
      "Robust risk metrics for rate-sensitive assets",
      "Improved realism versus static valuation",
    ],
    futureScope: [
      "Multi-factor stochastic models",
      "ML-based regime and parameter estimation",
      "Portfolio-level risk tools",
    ],
    budget: "NIL",
  },
  "fundamental-analysis-long-term-investing-dashboard": {
    mentors: ["Prashanth", "Karthik", "M S S Vinay", "Varun", "Manas"],
    mentees: ["P Deekshith", "Bharath Chowdary KB", "Joseph V Francis", "Diya Zacharia", "Rishi"],
    problem:
      "Fundamental comparison for Nifty 500 is fragmented across inconsistent sources and manual workflows.",
    objectives: [
      "Create centralized fundamentals dashboard",
      "Automate extraction of 50+ key metrics",
      "Standardize datasets for fast analysis",
      "Support long-term quality and value screening",
    ],
    methodology: [
      "Automated ingestion using yfinance",
      "Data cleaning and CSV standardization",
      "Power BI data-model construction",
      "Interactive sector and drill-down views",
    ],
    outcomes: [
      "Fully functional analytics dashboard",
      "Faster company comparison and insight extraction",
      "Reusable dataset foundation for future research",
    ],
    futureScope: [
      "Automated quarterly refresh",
      "Advanced valuation model integration",
      "Portfolio tracker with live pricing",
      "AI recommendation layer",
    ],
    budget: "NIL",
  },
  "cloudfunc-ai": {
    mentors: ["Nikhil Agarwal", "Lavanya Rathi", "Atharva Parkhi", "Aaryan Yadav"],
    mentees: ["Kowndinya", "Jiya", "Pratham", "Nikitha", "Bhavya", "Mili", "Santosh", "Prashasti"],
    about:
      "CloudFunc AI transforms natural language cloud requirements into deployable serverless code using RAG plus LLM reasoning.",
    methodology: [
      "Crawl and index cloud documentation",
      "Retrieve context through RAG",
      "Generate structured JSON tasks",
      "Render Python/Node/Go functions via templates",
      "Run secure sandbox testing",
    ],
    outcomes: [
      "Faster cloud automation development",
      "Reduced documentation overhead",
      "Correct trigger and permission scaffolding",
    ],
    budget: "Components/Budget: NONE",
  },
  "api-docs-agent-llm": {
    mentors: ["Radhika Sharda", "Sanstuti Mishra", "Pramod Budhiraja"],
    mentees: ["Nabeel", "Rahul", "Umar", "Rushi", "Pranav"],
    about:
      "Autonomous agent that converts unstructured API documentation into executable integration snippets.",
    methodology: [
      "Scrapy-based ingestion of docs",
      "LangChain chunking and ChromaDB embeddings",
      "LLM reasoning to structured API JSON",
      "Jinja2 conversion to Python/cURL",
      "React + TypeScript UI and FastAPI backend",
    ],
    outcomes: [
      "Lower friction API onboarding",
      "Executable code generation from docs",
    ],
    budget: "Components/Budget: NONE",
  },
  finsight: {
    mentors: ["Sai Chaitanya", "Pranav Venkat", "Sai Govardhan", "Dodda Karthik"],
    mentees: ["Anirudh", "Aryan Bokolia", "Aryan Sharma", "Rohit", "Seesa Harika"],
    about:
      "Mobile-first personal finance assistant for expense tracking, receipt intelligence and spend insights.",
    outcomes: [
      "Improved spending visibility",
      "Practical budgeting and split-expense assistance",
      "Better user financial decisions through analytics",
    ],
    budget: "Components/Budget: NONE",
  },
  "ethical-ai-machine-unlearning": {
    mentors: ["Basitha", "Heemakshi"],
    mentees: ["Harsha", "Pranav", "Varun", "Vinayak"],
    about:
      "Healthcare machine unlearning workflow where selected patient records can be forgotten while monitoring post-unlearning behavior.",
    methodology: [
      "Train baseline prediction model",
      "Execute record-level unlearning/retraining",
      "Visualize pre and post accuracy and predictions",
      "Apply GDPR/HIPAA aligned anonymization and handling",
    ],
    outcomes: [
      "Privacy-compliant model lifecycle strategy",
      "Transparent impact analysis via dashboard",
    ],
    budget: "Components/Budget: NONE",
  },
  "federated-learning-privacy-nlp": {
    mentors: ["Abhimanyu", "Chaitanya Menon", "Shreya"],
    mentees: ["Dhruva", "Emerin", "Tanmay", "Rohith"],
    about:
      "Federated NLP system to detect risky legal clauses without centralizing confidential contracts.",
    methodology: [
      "Local document preprocessing and clause extraction",
      "Transformer embeddings with legal-domain models",
      "Federated training with encrypted model updates",
      "Flower/PySyft style privacy-preserving orchestration",
    ],
    outcomes: [
      "Cross-client learning without data sharing",
      "Compliance-friendly risk analysis of contracts",
    ],
    budget: "Components/Budget: NONE",
  },
};

export const getProjectDetailBySlug = (slug: string) => projectDetailsBySlug[slug];
