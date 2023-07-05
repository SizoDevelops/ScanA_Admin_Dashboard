const endpoints = [
    {
        title: "App Settings",
        description: "These setting will update how the app functions and other specific app features.",
        details: [

            {
                endpoint: "location",
                icon: "/icons/locate.png",
                name: "Location",
            },
            {
                endpoint: "notifications",
                icon: "/icons/notifica.png",
                name: "Notifications"
            },
        ]
    },
    {
        title: "Member Details",
        description: "These setting will update how the app functions and other specific app features.",
        details: [
            {
                endpoint: "update-members",
                icon: "",
                name: "Update Members"
            },
            // {
            //     endpoint: "paused-attendance",
            //     icon: "",
            //     name: "Paused Attendency"
            // },
            {
                endpoint: "permissions",
                icon: "",
                name: "Permissions"
            },
        ]
    },
    {  
        title: "School Details",
        description: "These setting will update how the app functions and other specific app features.",
        details: [
            {
                endpoint: "school-details",
                icon: "",
                name: "Update Details"
            },

        ]
    },
    {
        title: "App Policies",
        description: "These setting will update how the app functions and other specific app features.",
        details: [
            {
                endpoint: "privacy-policy",
                icon: "",
                name: "Privacy Policy"
            },
            {
                endpoint: "attendance-policy",
                icon: "",
                name: "Attendency Policy"
            }

        ]
    }

]


export default endpoints;