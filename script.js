var formData1 = [{
    key: "q1",
    title: "COMPANY INFORMATION",
    question: "My Company is",
    // option1: "",
    // option2: "",
    // option3: "",
    // option4: "",
    inputText: true,
    // textArea: false
}, {
    key: "q2",
    title: "COMPANY INFORMATION",
    question: "We offer",
    option1: "Delivery",
    option2: "Delivery",
    option3: "Delivery",
    // option4: "",
    inputText: false,
    textArea: false
}];

var formData2 = [{
    key: "q3",
    title: "OPERATION INFORMATION",
    question: "How does your Customers make their order?",
    option1: "Phone Call",
    option2: "SMS",
    option3: "Website / App",
    option4: "Social Media",
    inputText: true,
    // textArea: false
}, {
    key: "q4",
    title: "OPERATION INFORMATION",
    question: "HHow does your Customers track their shipment?",
    option1: "Phone Call",
    option2: "SMS",
    option3: "Website / App",
    option4: "Social Media",
    inputText: true,
    // textArea: false
}, {
    key: "q5",
    title: "OPERATION INFORMATION",
    question: "How does your riders manage their deliveries?",
    option1: "Print Out",
    option2: "Website / App",
    option3: "Up to them to measure / No measure",
    // option4: "",
    inputText: true,
    // textArea: false
}, {
    key: "q6",
    title: "OPERATION INFORMATION",
    question: "How does your riders communicate with customers?",
    option1: "Phone Call",
    option2: "SMS",
    option3: "Website / App",
    option4: "Social Media",
    inputText: true,
    // textArea: false
}, {
    key: "q7",
    title: "OPERATION INFORMATION",
    question: "How do you keep record of customers and riders?",
    option1: "Print Out",
    option2: "Manual Software use(Word, Excel, etc)",
    option3: "No Measure",
    // option4: "",
    inputText: true,
    // textArea: false
}, {
    key: "q8",
    title: "OPERATION INFORMATION",
    question: "How do you keep track of shipments?",
    option1: "Print Out",
    option2: "Manual Software use(Word, Excel, etc)",
    option3: "No Measure",
    // option4: "",
    inputText: true,
    // textArea: false
}, {
    key: "q10",
    title: "OPERATION INFORMATION",
    question: "How do you assign shipments to riders?",
    option1: "Phone Call",
    option2: "SMS",
    option3: "Website / App",
    option4: "Social Media",
    inputText: true,
    // textArea: false
}, {
    key: "q9",
    title: "OPERATION INFORMATION",
    question: "How do you receive payment from your customers?",
    option1: "On delivery",
    option2: "Online",
    option3: "Both",
    // option4: "",
    // inputText: false,
    // textArea: false
}, {
    key: "q11",
    title: "OPERATION INFORMATION",
    question: "If you could afford a software solution to do this for you, what would your specification be (Max. 500 words) ",
    // option1: "",
    // option2: "",
    // option3: "",
    // option4: "",
    // inputText: false,
    textArea: false
}];

var formData3 = [{
    key: "q12",
    title: "LOGISTIX REVIEW",
    question: "How easy was using the app for you?",
    option1: "Poor",
    option2: "Good",
    option3: "Excellent",
    // option4: "",
    inputText: false,
    textArea: false
}, {
    key: "q13",
    title: "LOGISTIX REVIEW",
    question: "How satisfied are you with the onboarding process?",
    option1: "Poor",
    option2: "Good",
    option3: "Excellent",
    // option4: "",
    inputText: false,
    textArea: false
}, {
    key: "q14",
    title: "LOGISTIX REVIEW",
    question: "How satisfied are you with the userbility of the site?",
    option1: "Poor",
    option2: "Good",
    option3: "Excellent",
    // option4: "",
    inputText: false,
    textArea: false
}, {
    key: "q15",
    title: "LOGISTIX REVIEW",
    question: "How satisfied are you with the quality and quantity of information provided during onboarding process?",
    option1: "Poor",
    option2: "Good",
    option3: "Excellent",
    // option4: "",
    inputText: false,
    textArea: false
}, {
    key: "q16",
    title: "LOGISTIX REVIEW",
    question: "Based on your experience, How likely are you to recommend Logistix to another company?",
    option1: "Poor",
    option2: "Good",
    option3: "Excellent",
    // option4: "",
    inputText: false,
    textArea: false
}];

var App = {
    setup() {
        const showItem = Vue.ref(false);
        return {
            data: formData,
            showItem,
        };
    },
};

Vue.createApp(App).mount("#app");