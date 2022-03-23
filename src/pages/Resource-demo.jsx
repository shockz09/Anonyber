import React from 'react'
import Video from "../components/Video";
import Blog from "../components/Blog";

function ResourceDemo() {
  return (
    <div>
        <h1 className="text-5xl mb-7 mt-3 underline decoration-hecker"> Videos </h1>
        <Video
            video_title="Passwords | Security Awareness"
            video_url="https://youtu.be/0Wd3JoUHXno"
            thumbnail_url="https://img.youtube.com/vi/0Wd3JoUHXno/sddefault.jpg"
        />
        <Video
            video_title="Data Handling | Security Awareness"
            video_url="https://youtu.be/hsNRrEnB_aM"
            thumbnail_url="https://img.youtube.com/vi/hsNRrEnB_aM/sddefault.jpg"
        />
        <Video
            video_title="Computer Theft | Security Awareness"
            video_url="https://youtu.be/QiaIL-J9Vds"
            thumbnail_url="https://img.youtube.com/vi/QiaIL-J9Vds/sddefault.jpg"
        />
         <Video
            video_title="Phishing And RansomWare| Security Awareness"
            video_url="https://youtu.be/D_yAYhjNE-0"
            thumbnail_url="https://img.youtube.com/vi/D_yAYhjNE-0/sddefault.jpg"
        />
        <Video
            video_title="Removable Media | Security Awareness"
            video_url="https://youtu.be/FRxrHduwPjY"
            thumbnail_url="https://img.youtube.com/vi/FRxrHduwPjY/sddefault.jpg"
        />
        <Video
            video_title="Internet Downloads | Security Awareness"
            video_url="https://youtu.be/7Apu1EWZPhQ"
            thumbnail_url="https://img.youtube.com/vi/7Apu1EWZPhQ/sddefault.jpg"
        />
        <Video
            video_title="WIFi | Security Awareness"
            video_url="https://youtu.be/RQttayB5ymA"
            thumbnail_url="https://img.youtube.com/vi/RQttayB5ymA/sddefault.jpg"
        />
         <Video
            video_title="How Long Should Your Password be? | Account Protection"
            video_url="https://youtu.be/4rNqh9Kpl9Q"
            thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/passwords.jpg"
        />
        <Video
            video_title="What is 2FA? | Account Protection"
            video_url="https://youtu.be/S9R5Gyr226Y"
            thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/2fa.jpg"
        />

        <Video
            video_title="What is a password manager? | Account Protection"
            video_url="https://www.youtube.com/watch?v=y4Ak2SXwVLo&list=PLIhtsJP6W5vhU7yUlGY5wgFwAlSqcq4mg&index=25&t=8s"
            thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/passwordmanager.jpg"
        />
        <Video
            video_title="Poisnous Emails | Account Protection"
            video_url="https://youtu.be/wEEHlaZXOMI"
            thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/archernews2.jpg"
        />
        <Video
            video_title="What is a VPN? | Securing Home Systems"
            video_url="https://youtu.be/G4qNBCrsxmI"
            thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/vpn2.jpg"
        />
        <Video
            video_title="What is a Firewall? | Securing Home Systems"
            video_url="https://youtu.be/_sSxCf5d9XQ"
            thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/firewall2.jpg"
        />
         <Video
            video_title="What is a Home Router? | Securing Home Systems"
            video_url="https://youtu.be/CcuSlMsYKvY"
            thumbnail_url="https://www.cmu.edu/iso/aware/videos/images/homerouter2.jpg"
        />

        <h1 className="text-5xl mb-7 mt-3 underline decoration-hecker"> Blogs </h1>

        <Blog 
        blog_title="How To Protect Yourself From Phishing?"
        blog_url = "https://support.microsoft.com/en-us/windows/protect-yourself-from-phishing-0c7ea947-ba98-3bd9-7184-430e1f860a44 "
        blog_img="https://antivirusjar.com/wp-content/uploads/2019/10/phising-scam.jpg"
        />
         <Blog 
        blog_title="Phishing | Government Advisary"
        blog_url = "https://www.ncsc.gov.uk/guidance/phishing         "
        blog_img="https://www.ncsc.gov.uk/images/Phishing-vector%20-%20Copy.png?mpwidth=545&mlwidth=737&twidth=961&dwidth=635&dpr=1&width=1920"
        />
        <Blog 
        blog_title="How to Keep Your Passwords, Financial & Personal Information Online Safe in 2022"
        blog_url = "https://digitalguardian.com/blog/101-data-protection-tips-how-keep-your-passwords-financial-personal-information-safe"
        blog_img="https://twelvesec.com/wp-content/uploads/2021/03/data-protection.png"
        />
        <Blog 
        blog_title="Online Safety Guidelines | Cyber Crime Dvision India"
        blog_url = "https://www.cybercrime.gov.in/Webform/Crime_OnlineSafetyTips.aspx"
        blog_img="https://i.ibb.co/Hn2zf9p/caaution.png"
        />
        <Blog 
        blog_title="Online Gaming Scams during Pandemic. How to Stay Safe"
        blog_url = "https://www.kaspersky.co.in/resource-center/threats/coronavirus-gaming-scams"
        blog_img="https://www.kaspersky.co.in/content/en-in/images/repository/isc/2020/covidgaming1.jpg"
        />
        <Blog 
        blog_title="Online Scams Advisory For Students | ISEA"
        blog_url = "https://infosecawareness.in/concept/student/online-scams"
        blog_img="https://infosecawareness.in/concept/index.php?img=Student-brand1202"
        />
         <Blog 
        blog_title="Online Scams Advisory For Women | ISEA"
        blog_url = "https://infosecawareness.in/concept/women?lang=en"
        blog_img="https://infosecawareness.in/concept/index.php?img=Woment-brand1256"
        />
        <Blog 
        blog_title="9 Instagram Scams You Need To Avoid"
        blog_url = "https://finance.yahoo.com/news/9-instagram-scams-avoid-192650720.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAD4BQBXheyCQHg47OvGQUbyv0Ah9wc0wfz3SPgUgwf4fO57IQwsW9r3KGrD2jOpQaYwfeUNbiOdtebc_7vqlmWlNHSqDs1bHElldfZy91ASus7wi0LClv5afyBSWTlDfrvK0kgaR9Mys0bT1ibyw5eDyw2Cj49PEHgchx3f-1yBX"
        blog_img="https://www.metacompliance.com/wp-content/uploads/2021/01/Instagram-scams.jpg"
        />
    </div>
  )
}

export default ResourceDemo