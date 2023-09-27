const endpoints = [
    {
        title: "App Settings",
        description: "These setting will update and generate registration QR codes",
        details: [

            {
                endpoint: "location",
                icon: "/icons/locate.png",
                name: "Location",
            },
            {
                endpoint: "attendance",
                icon: "/icons/notification.png",
                name: "Mark Attendance"
            },
        ]
    },
    {
        title: "Member Details",
        description: "These setting will update members which includes deleting and adding new members.",
        details: [
            {
                endpoint: "manage-members",
                icon: "",
                name: "Manage Members"
            },
            {
                endpoint: "add-members",
                icon: "/icons/addUser.png",
                name: "Add Members"
            },
            // {
            //     endpoint: "permissions",
            //     icon: "/icons/permit.png",
            //     name: "Permissions"
            // },
        ]
    },
    {  
        title: "School Details",
        description: "These setting will update how the app functions and other specific app features.",
        details: [
            {
                endpoint: "school-details",
                icon: "/icons/school.png",
                name: "School Details"
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