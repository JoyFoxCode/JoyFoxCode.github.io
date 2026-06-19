const lessons = [
    {
        id: "networking-fundamentals",
        title: "Networking Fundamentals",
        category: "Fundamentals",
        objectives: [
            "Understand what a computer network is",
            "Learn IPv4 and IPv6 addressing",
            "Understand ports and common services",
            "Differentiate TCP and UDP",
            "Understand DNS and HTTP/HTTPS"
        ],
        content: `
            <h3>What is a Network?</h3>
            <p>A network is a group of devices connected together so they can exchange information.</p>
            <h3>IP Addresses</h3>
            <p>Every device on a network has an IP address.</p>
            <h4>Private IPv4 Ranges</h4>
            <ul>
                <li>10.0.0.0 – 10.255.255.255</li>
                <li>172.16.0.0 – 172.31.255.255</li>
                <li>192.168.0.0 – 192.168.255.255</li>
            </ul>
            <h3>Ports</h3>
            <table class="lesson-table">
                <tr><th>Port</th><th>Service</th></tr>
                <tr><td>22</td><td>SSH</td></tr>
                <tr><td>53</td><td>DNS</td></tr>
                <tr><td>80</td><td>HTTP</td></tr>
                <tr><td>443</td><td>HTTPS</td></tr>
            </table>
            <h3>TCP vs UDP</h3>
            <p><strong>TCP:</strong></p>
            <ul>
                <li>Reliable</li>
                <li>Connection-oriented</li>
                <li>Guarantees delivery</li>
            </ul>
            <p><strong>UDP:</strong></p>
            <ul>
                <li>Faster</li>
                <li>No guarantee of delivery</li>
                <li>Connectionless</li>
            </ul>
            <h3>DNS</h3>
            <p>DNS translates domain names (google.com) into IP addresses.</p>
            <h3>HTTP vs HTTPS</h3>
            <p>HTTPS is HTTP encrypted using TLS.</p>
        `,
        exercises: [
            "Find your local IPv4 and IPv6 addresses using ipconfig.",
            "Ping google.com and record the average response time.",
            "Run nslookup google.com and identify IPv4 and IPv6 addresses.",
            "Determine whether these IPs are public or private: 8.8.8.8, 192.168.1.50, 172.20.15.7.",
            "Explain the difference between TCP and UDP in your own words."
        ],
        quiz: [
            {
                question: "What does DNS do?",
                answers: [
                    "Translates domain names to IP addresses",
                    "Encrypts web traffic",
                    "Routes packets",
                    "Assigns IP addresses"
                ],
                correct: 0
            },
            {
                question: "Which protocol guarantees delivery?",
                answers: [
                    "UDP",
                    "ICMP",
                    "TCP",
                    "DNS"
                ],
                correct: 2
            },
            {
                question: "Which port is commonly used for HTTPS?",
                answers: [
                    "53",
                    "80",
                    "443",
                    "22"
                ],
                correct: 2
            }
        ],
        externalPractice: [
            {
                name: "TryHackMe – Pre Security",
                url: "https://tryhackme.com/path/outline/presecurity"
            },
            {
                name: "Cisco Networking Basics",
                url: "https://skillsforall.com/"
            }
        ]
    },
    {
        id: "linux-basics",
        title: "Linux Command Line",
        category: "Fundamentals",
        objectives: [
            "Navigate the filesystem",
            "View file contents",
            "Search for files",
            "Understand permissions"
        ],
        content: `
            <h3>Common Commands</h3>
            <table class="lesson-table">
                <tr><th>Command</th><th>Purpose</th></tr>
                <tr><td>pwd</td><td>Print working directory</td></tr>
                <tr><td>ls</td><td>List files</td></tr>
                <tr><td>cd</td><td>Change directory</td></tr>
                <tr><td>cat</td><td>Display file contents</td></tr>
                <tr><td>grep</td><td>Search text</td></tr>
                <tr><td>find</td><td>Find files</td></tr>
                <tr><td>chmod</td><td>Change permissions</td></tr>
            </table>
            <h3>Permissions</h3>
            <p>Linux permissions use:</p>
            <ul>
                <li>r = read</li>
                <li>w = write</li>
                <li>x = execute</li>
            </ul>
        `,
        exercises: [
            "Install WSL or a Linux VM.",
            "Navigate directories using cd.",
            "Use ls to list files.",
            "Read a file using cat.",
            "Complete OverTheWire Bandit levels 0–5."
        ],
        quiz: [
            {
                question: "What command changes directories?",
                answers: [
                    "ls",
                    "cd",
                    "cat",
                    "pwd"
                ],
                correct: 1
            }
        ],
        externalPractice: [
            {
                name: "OverTheWire Bandit",
                url: "https://overthewire.org/wargames/bandit/"
            }
        ]
    },
    {

    id: "dns-fundamentals",

    title: "DNS Fundamentals",

    category: "Networking",

    objectives: [

        "Understand what DNS does",

        "Learn common DNS record types",

        "Understand the DNS resolution process"

    ],

    content: `

        <h3>What is DNS?</h3>

        <p>DNS translates domain names into IP addresses.</p>

        <pre>

google.com

     ↓

142.250.x.x

        </pre>

        <p>Without DNS, you would need to memorize IP addresses for every website.</p>

        <h3>Common Record Types</h3>

        <table class="lesson-table">

            <tr>

                <th>Record</th>

                <th>Purpose</th>

            </tr>

            <tr>

                <td>A</td>

                <td>IPv4 Address</td>

            </tr>

            <tr>

                <td>AAAA</td>

                <td>IPv6 Address</td>

            </tr>

            <tr>

                <td>CNAME</td>

                <td>Alias</td>

            </tr>

            <tr>

                <td>MX</td>

                <td>Mail Server</td>

            </tr>

        </table>

        <h3>Resolution Process</h3>

        <pre>

Browser

   ↓

DNS Server

   ↓

IP Address

   ↓

Website

        </pre>

    `,

    exercises: [

        "Run nslookup google.com.",

        "Run nslookup openai.com.",

        "Identify one IPv4 address and one IPv6 address.",

        "Explain DNS in one sentence."

    ],

    quiz: [

        {

            question: "What does DNS do?",

            answers: [

                "Encrypts traffic",

                "Translates names into IP addresses",

                "Assigns IP addresses",

                "Routes packets"

            ],

            correct: 1

        },

        {

            question: "Which record stores an IPv4 address?",

            answers: [

                "A",

                "AAAA",

                "MX",

                "CNAME"

            ],

            correct: 0

        },

        {

            question: "Which record stores an IPv6 address?",

            answers: [

                "A",

                "AAAA",

                "MX",

                "TXT"

            ],

            correct: 1

        }

    ],

    externalPractice: [

        {

            name: "TryHackMe - DNS in Detail",

            url: "https://tryhackme.com"

        }
    ];
