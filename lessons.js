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

        id: "intro-to-ctf",

        title: "Introduction to CTFs",

        category: "Fundamentals",

        objectives: [

            "Understand what a CTF is",

            "Learn common challenge categories",

            "Understand the mindset of solving challenges"

        ],

        content: `

            <h3>What is a CTF?</h3>

            <p>CTF stands for Capture The Flag.</p>

            <p>A CTF is a cybersecurity challenge where your goal is to find a hidden flag.</p>

            <pre>flag{example_flag}</pre>

            <h3>Common Categories</h3>

            <table class="lesson-table">

                <tr>

                    <th>Category</th>

                    <th>Focus</th>

                </tr>

                <tr>

                    <td>Web</td>

                    <td>Websites and applications</td>

                </tr>

                <tr>

                    <td>Crypto</td>

                    <td>Ciphers and encryption</td>

                </tr>

                <tr>

                    <td>Forensics</td>

                    <td>Analyzing files and data</td>

                </tr>

                <tr>

                    <td>OSINT</td>

                    <td>Public information gathering</td>

                </tr>

                <tr>

                    <td>Reverse Engineering</td>

                    <td>Understanding programs</td>

                </tr>

            </table>

            <h3>The CTF Mindset</h3>

            <ul>

                <li>Observe carefully</li>

                <li>Question assumptions</li>

                <li>Break problems into smaller pieces</li>

                <li>Document everything</li>

            </ul>

            <p>CTFs are legal environments specifically designed for learning and practice.</p>

        `,

        exercises: [

            "Create a free picoCTF account.",

            "Browse the challenge categories.",

            "Write down which category interests you most.",

            "Find a challenge that contains a visible flag."

        ],

        quiz: [

            {

                question: "What does CTF stand for?",

                answers: [

                    "Capture The Flag",

                    "Control The Firewall",

                    "Cyber Task Force",

                    "Central Traffic Flow"

                ],

                correct: 0

            },

            {

                question: "Which category focuses on encryption?",

                answers: [

                    "Web",

                    "Crypto",

                    "OSINT",

                    "Forensics"

                ],

                correct: 1

            },

            {

                question: "Are CTFs legal learning environments?",

                answers: [

                    "Yes",

                    "No"

                ],

                correct: 0

            }

        ],

        externalPractice: [

            {

                name: "picoCTF",

                url: "https://picoctf.org"

            }

        ]

    }

];
