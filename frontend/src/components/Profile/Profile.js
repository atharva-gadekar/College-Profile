import React from "react";
import "./Profile.css";
import { Center, Square, Circle } from "@chakra-ui/react";
import img1 from "../../resources/manas.jpg";
import img2 from "../../resources/cover3.jpg";
import Navbar from "../navbar/navbar";
import ReactMarkdown from "react-markdown";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { IoSchoolOutline } from "react-icons/io5";
import { AiOutlineBranches } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import {
	Tag,
	TagLabel,
	TagLeftIcon,
	TagRightIcon,
	TagCloseButton,
} from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function Profile() {
	let md = `
  
# 💫About Me :
I'm a Full Stack Web Developer


## 🌐Socials
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/buddy.longlegs) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/anurag-jain-4ba46b220) 

# 💻Tech Stack
![C](https://img.shields.io/badge/c-%2300599C.svg?style=plastic&logo=c&logoColor=white) ![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=plastic&logo=c%2B%2B&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=plastic&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E) ![Python](https://img.shields.io/badge/python-3670A0?style=plastic&logo=python&logoColor=ffdd54) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=plastic&logo=amazon-aws&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=plastic&logo=heroku&logoColor=white) ![Google Cloud](https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=plastic&logo=google-cloud&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=plastic&logo=bootstrap&logoColor=white) ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=plastic&logo=django&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=plastic&logo=express&logoColor=%2361DAFB) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=plastic&logo=fastapi) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=plastic&logo=flask&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB) ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=plastic&logo=nginx&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=plastic&logo=mysql&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=plastic&logo=sqlite&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=plastic&logo=mongodb&logoColor=white) ![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=plastic&logo=Arduino&logoColor=white)
# 📊GitHub Stats :
![](https://github-readme-stats.vercel.app/api?username=BuddyLongLegs&theme=nightowl&hide_border=false&include_all_commits=true&count_private=false)
![](https://github-readme-streak-stats.herokuapp.com/?user=BuddyLongLegs&theme=nightowl&hide_border=false)
![](https://github-readme-stats.vercel.app/api/top-langs/?username=BuddyLongLegs&theme=nightowl&hide_border=false&include_all_commits=true&count_private=false&layout=compact)

---
[![](https://visitcount.itsvg.in/api?id=BuddyLongLegs&icon=0&color=0)](https://visitcount.itsvg.in)

`;
	return (
		<div className="outer">
			<Navbar />
			<div className="box">
				<div className="first">
					<div className="head">
						<div className="one">
							<Center>
								<div className="pic">
									<Avatar size="2xl" src={img1} />
								</div>
								<div className="name">Manas Gupta</div>
							</Center>
						</div>
					</div>
					<div className="nav">
						{/* <Tabs variant="soft-rounded" colorScheme="green" id="nav">
							<TabList>
								<Tab>Tab 1</Tab>
								<Tab>Tab 2</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<p>one!</p>
								</TabPanel>
								<TabPanel>
									<p>two!</p>
								</TabPanel>
							</TabPanels>
						</Tabs> */}
					</div>
				</div>
				<div className="body">
					<div className="sec1">
						<div className="info">
							<div className="heading">Introduction</div>
							<div className="details">
								<div className="type">
									<div className="icon">
										<IoSchoolOutline />
									</div>
									<div className="text">IIIT Allahabad</div>
								</div>
								<div className="type">
									<div className="icon">
										<AiOutlineBranches />
									</div>
									<div className="text">Btech. in Information Technology</div>
								</div>
								<div className="type">
									<div className="icon">
										<FaUserGraduate id="grad" />
									</div>
									<div className="text">2021-2025</div>
								</div>
								<div className="skills">
									<Tag
										size="md"
										variant="solid"
										colorScheme="green"
										className="tag"
									>
										HTML5
									</Tag>

									<Tag
										size="md"
										variant="solid"
										colorScheme="green"
										className="tag"
									>
										CSS
									</Tag>

									<Tag
										size="md"
										variant="solid"
										colorScheme="green"
										className="tag"
									>
										Javascript
									</Tag>

									<Tag
										size="md"
										variant="solid"
										colorScheme="green"
										className="tag"
									>
										React.js
									</Tag>

									<Tag
										size="md"
										variant="solid"
										colorScheme="green"
										className="tag"
									>
										Next.js
									</Tag>
								</div>
							</div>
						</div>
						<div className="info">
							<div className="heading">Contact Details</div>
						</div>
					</div>
					<div className="sec2">
						<div className="md">
							<ReactMarkdown children={md} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
