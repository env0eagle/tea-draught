const { onboardDeveloper, registerProject, receiveTokens } = require('tea-demo-arsen');

console.log("Tea Recommendation System Project Initialization...");

const developerInfo = {
    name: "Daisy the Developer",
    email: "daisy@ai4tea.com"
};

const projectInfo = {
    name: "AI-Driven Tea Draughts",
    repositoryUrl: "https://github.com/daisyai/tea-recommendations"
};

const walletAddress = onboardDeveloper(developerInfo);
const projectId = registerProject(projectInfo);
receiveTokens(projectId);

console.log("AI Tea Recommendation Project setup completed.");
