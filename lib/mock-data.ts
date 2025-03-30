import type { Article } from "./types";

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Tech Giant Unveils Revolutionary AI Assistant That Can Write Code",
    excerpt:
      "The new AI system can generate complex applications from simple natural language descriptions.",
    content:
      "In a groundbreaking announcement, a leading tech company has unveiled a revolutionary AI assistant capable of writing complex code from simple natural language descriptions. The system, which has been in development for over three years, can understand context, follow complex instructions, and generate fully functional applications across multiple programming languages. Early demonstrations showed the AI creating a complete web application, including frontend and backend components, from a brief text description in under five minutes.",
    author: "Michael Chen",
    date: "March 14, 2023",
    category: "tech",
    image:
      "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/sam-altman-ai-inc_536595_s6eifk.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Global Climate Summit Reaches Historic Agreement on Emissions",
    excerpt:
      "World leaders have reached a landmark agreement to reduce carbon emissions by 50% by 2030.",
    content:
      "In a historic move, world leaders from over 190 countries have reached a landmark agreement at the Global Climate Summit to reduce carbon emissions by 50% by 2030. The agreement, which comes after two weeks of intense negotiations, is being hailed as a major breakthrough in the fight against climate change. The deal includes commitments from both developed and developing nations, with financial support mechanisms for countries that need assistance in transitioning to cleaner energy sources.",
    author: "Jane Smith",
    date: "March 15, 2023",
    category: "world",
    image:
      "https://www.consilium.europa.eu/media/68475/5f8a479d-e3e7-45a4-a014-2f837f786c03_.jpg",
    featured: true,
  },

  {
    id: "3",
    title: "Olympic Gold Medalist Breaks World Record in Spectacular Fashion",
    excerpt:
      "The athlete shattered a 20-year-old record in front of a stunned crowd at the championship finals.",
    content:
      "In an electrifying performance that left spectators in awe, an Olympic gold medalist has broken a 20-year-old world record at the championship finals. The athlete's remarkable achievement came after months of intense training and strategic preparation. Sports analysts are calling it one of the most impressive athletic performances in recent history, noting the perfect execution and seemingly effortless technique that contributed to this historic moment in sports.",
    author: "Robert Johnson",
    date: "March 13, 2023",
    category: "sports",
    image:
      "https://hips.hearstapps.com/clv.h-cdn.co/assets/16/33/4000x2000/1471642232-landscape-1471634375-1471633564-1471546022-gettyimages-591631178.jpg",
    featured: true,
  },
  {
    id: "4",
    title:
      "Breakthrough Cancer Treatment Shows Promising Results in Clinical Trials",
    excerpt:
      "The new therapy has shown a 70% success rate in treating previously untreatable forms of cancer.",
    content:
      "A revolutionary cancer treatment has shown remarkable results in recent clinical trials, offering hope to patients with previously untreatable forms of the disease. The therapy, which combines targeted immunotherapy with a novel delivery mechanism, has demonstrated a 70% success rate in reducing tumor size and improving patient outcomes. Medical experts are cautiously optimistic about the potential of this treatment to transform cancer care, though they emphasize that larger studies are still needed to confirm these initial promising results.",
    author: "Sarah Williams",
    date: "March 12, 2023",
    category: "health",
    image:
      "https://images.pexels.com/photos/3883801/pexels-photo-3883801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    featured: false,
  },
  {
    id: "5",
    title: "Major Film Studio Announces Ambitious New Cinematic Universe",
    excerpt:
      "The studio plans to release 12 interconnected films over the next five years based on popular book series.",
    content:
      "A major Hollywood studio has announced plans for an ambitious new cinematic universe based on a beloved book series. The project will span 12 interconnected films released over the next five years, with an estimated budget exceeding $2 billion. Several A-list actors and acclaimed directors have already signed on to the project, which the studio hopes will redefine franchise filmmaking. Production on the first film is set to begin next month, with a targeted release date for the summer blockbuster season.",
    author: "David Thompson",
    date: "March 11, 2023",
    category: "entertainment",
    image:
      "https://s.studiobinder.com/wp-content/uploads/2020/09/What-are-the-Major-Film-Studios-Hollywoods-Big-Five-Featured.jpg",
    featured: false,
  },
  {
    id: "6",
    title: "Economic Experts Predict Major Shift in Global Financial Markets",
    excerpt:
      "Analysts forecast significant changes in investment patterns due to emerging technologies and geopolitical factors.",
    content:
      "Leading economic experts are predicting a major shift in global financial markets over the next decade, driven by the rapid advancement of emerging technologies and changing geopolitical dynamics. The forecast suggests a significant realignment of investment patterns, with traditional sectors facing disruption while new opportunities emerge in previously overlooked areas. Financial advisors are recommending diversified portfolios that balance exposure to established markets with strategic investments in innovation-focused sectors.",
    author: "Jennifer Lee",
    date: "March 10, 2023",
    category: "business",
    image:
      "https://assets.weforum.org/article/image/responsive_big_webp_mkF4tNQVr0EB4yDb7WoCgdXXQ9-IdD9pCbP9s6Rwywc.webp",
    featured: false,
  },
  {
    id: "7",
    title: "Archaeologists Discover Ancient City Hidden Beneath Desert Sands",
    excerpt:
      "The 3,000-year-old settlement could rewrite our understanding of early civilization in the region.",
    content:
      "In a remarkable archaeological discovery, researchers have unearthed a 3,000-year-old city that had been hidden beneath desert sands for millennia. The extensive settlement, which includes well-preserved buildings, temples, and infrastructure, is challenging existing theories about early civilization in the region. Artifacts recovered from the site suggest a sophisticated society with advanced knowledge of mathematics, astronomy, and engineering. Experts believe this discovery could fundamentally alter our understanding of ancient cultural development and trade networks.",
    author: "Ahmed Hassan",
    date: "March 9, 2023",
    category: "science",
    image:
      "https://images.pexels.com/photos/209116/pexels-photo-209116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    featured: false,
  },
  {
    id: "8",
    title:
      "Renewable Energy Milestone: Country Achieves 100% Clean Power for Full Month",
    excerpt:
      "The nation has set a new record by running entirely on renewable energy sources for 30 consecutive days.",
    content:
      "In a landmark achievement for sustainable development, a nation has successfully powered its entire electricity grid using only renewable energy sources for a full month. This unprecedented milestone was achieved through a strategic combination of solar, wind, hydroelectric, and geothermal power, supported by advanced energy storage systems. Government officials attribute the success to years of consistent policy support and substantial investments in green infrastructure. Environmental experts are hailing this achievement as proof that a transition to 100% clean energy is both technically feasible and economically viable.",
    author: "Elena Rodriguez",
    date: "March 8, 2023",
    category: "world",
    image:
      "https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    featured: false,
  },
  {
    id: "9",
    title:
      "Virtual Reality Therapy Shows Remarkable Results for Mental Health Treatment",
    excerpt:
      "New research demonstrates VR-based interventions are highly effective for treating anxiety and PTSD.",
    content:
      "Groundbreaking research has demonstrated that virtual reality therapy is producing remarkable results in treating various mental health conditions, particularly anxiety disorders and PTSD. The immersive VR interventions allow patients to confront and process traumatic experiences or anxiety-inducing situations in a controlled, safe environment under therapeutic guidance. Clinical trials have shown success rates comparable or superior to traditional therapies, often with faster improvement timelines. Mental health professionals are increasingly incorporating these technologies into their practice, though they emphasize that VR therapy works best as part of a comprehensive treatment approach.",
    author: "Thomas Wilson",
    date: "March 7, 2023",
    category: "health",
    image:
      "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2023-06/virtual-reality-companies.jpg",
    featured: false,
  },
  {
    id: "10",
    title:
      "Unexpected Political Alliance Forms to Address Critical Infrastructure Bill",
    excerpt:
      "Rival political factions have joined forces to support a comprehensive plan to modernize national infrastructure.",
    content:
      "In a surprising development that has caught political observers off guard, traditionally opposed political factions have formed an alliance to support a comprehensive infrastructure modernization bill. The bipartisan effort focuses on rebuilding aging transportation networks, expanding broadband access, and strengthening critical utilities across the country. Political analysts suggest that growing public frustration with deteriorating infrastructure and recent high-profile system failures have created unusual common ground between otherwise divided lawmakers. The proposed legislation includes $1.2 trillion in funding over eight years, with mechanisms for both public and private investment.",
    author: "Maria Garcia",
    date: "March 6, 2023",
    category: "politics",
    image:
      "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    featured: false,
  },
  {
    id: "11",
    title:
      "Innovative Urban Planning Project Transforms City Center into Green Oasis",
    excerpt:
      "The award-winning design has converted concrete jungle into thriving public spaces with native plants and sustainable features.",
    content:
      "An innovative urban planning project has successfully transformed a once congested city center into a green oasis, earning international recognition for its sustainable design. The initiative replaced vast areas of concrete with native plant gardens, created a network of pedestrian-friendly pathways, and incorporated renewable energy features throughout public spaces. Local businesses report increased foot traffic and revenue since the project's completion, while residents enjoy improved air quality and new recreational areas. City officials are already planning to expand the concept to additional neighborhoods based on the overwhelming positive response.",
    author: "James Wilson",
    date: "March 5, 2023",
    category: "world",
    image:
      "https://images.pexels.com/photos/356133/pexels-photo-356133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    featured: false,
  },
  {
    id: "12",
    title:
      "Streaming Platform's Original Series Breaks Viewership Records Worldwide",
    excerpt:
      "The surprise hit show has become a global phenomenon, setting new streaming records in multiple countries.",
    content:
      "A new original series from a major streaming platform has shattered viewership records worldwide, becoming an unexpected global phenomenon. The show, which features a diverse international cast and innovative storytelling approach, has topped streaming charts in over 90 countries since its release. Industry analysts attribute its success to strong word-of-mouth promotion, cultural relevance, and the platform's strategic global release strategy. The unprecedented popularity has already secured the series a multi-season renewal and sparked discussions about its impact on future content production trends.",
    author: "Sophia Kim",
    date: "March 4, 2023",
    category: "entertainment",
    image:
      "https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    featured: false,
  },
];
