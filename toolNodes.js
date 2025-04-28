const toolNodes = {
  start: {
    title: "What do you want to create with AI?",
    options: [
      { text: "Generate text and ideas", node: "text" },
      { text: "Create or edit images", node: "image" },
      { text: "Make videos or animations", node: "video" },
      { text: "Build presentations", node: "presentations" },
      { text: "Analyze documents and research", node: "documents" },
      { text: "Generate or enhance audio", node: "audio" },
      { text: "Help me find tools for Government or Education", node: "organization" }
    ]
  },

  // Text section with subcategories
  text: {
    title: "What type of text do you want to generate?",
    options: [
      { text: "General writing and brainstorming", node: "general_text" },
      { text: "Technical or specialized content", node: "specialized_text" },
      { text: "Creative writing or fiction", node: "creative_text" },
      { text: "Code and programming assistance", node: "code_text" }
    ]
  },

  general_text: {
    title: "General Text Generation Tools",
    description: "These tools can help with everyday writing tasks and brainstorming:",
    tools: [
      { name: "ChatGPT (Free version)", description: "Versatile AI assistant for various text generation needs", link: "https://chat.openai.com/" },
      { name: "Claude.AI", description: "Anthropic's conversational AI with strong reasoning capabilities", link: "https://claude.ai/" },
      { name: "Gemini", description: "Google's multimodal AI that can process text, images, and more", link: "https://gemini.google.com/" },
      { name: "You.com", description: "AI search that combines web results with generative responses", link: "https://you.com/" },
      { name: "Mistral", description: "Open-weight AI model with powerful language capabilities", link: "https://mistral.ai/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different text options", node: "text" }
    ]
  },

  specialized_text: {
    title: "Specialized Text Generation Tools",
    description: "These tools excel at specific types of technical content:",
    tools: [
      { name: "Consensus", description: "Scientific research assistant for exploring academic literature", link: "https://consensus.app/" },
      { name: "NotebookLM", description: "Google's tool for analyzing and working with source documents", link: "https://notebooklm.google.com/" },
      { name: "StormAI", description: "Advanced AI system for complex reasoning and specialized knowledge domains", link: "https://www.storm.ai/" },
      { name: "Perplexity", description: "AI search that provides cited answers from the web", link: "https://www.perplexity.ai/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different text options", node: "text" }
    ]
  },

  creative_text: {
    title: "Creative Writing Tools",
    description: "Perfect for fiction, poetry, and creative content:",
    tools: [
      { name: "Sudowrite", description: "AI writing companion for fiction authors", link: "https://www.sudowrite.com/" },
      { name: "NovelAI", description: "AI storytelling platform designed for narrative fiction", link: "https://novelai.net/" },
      { name: "Poe", description: "Platform with multiple AI models for creative explorations", link: "https://poe.com/" },
      { name: "Grok", description: "X's AI with a personality designed for creative exchanges", link: "https://grok.x.ai/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different text options", node: "text" }
    ]
  },

  code_text: {
    title: "Coding and Programming Tools",
    description: "AI assistance for developers:",
    tools: [
      { name: "GitHub Copilot", description: "AI pair programmer that integrates with code editors", link: "https://github.com/features/copilot" },
      { name: "Replit Ghostwriter", description: "AI coding assistant built into the Replit IDE", link: "https://replit.com/ghostwriter" },
      { name: "Amazon CodeWhisperer", description: "AI coding companion with security scanning features", link: "https://aws.amazon.com/codewhisperer/" },
      { name: "Tabnine", description: "Code completion assistant with multiple language support", link: "https://www.tabnine.com/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different text options", node: "text" }
    ]
  },

  // Image section with subcategories
  image: {
    title: "What do you want to do with images?",
    options: [
      { text: "Generate brand new images", node: "generate_image" },
      { text: "Edit or enhance existing images", node: "edit_image" },
      { text: "Create diagrams or designs", node: "design_image" }
    ]
  },

  generate_image: {
    title: "Image Generation Tools",
    description: "Create original images from text prompts:",
    tools: [
      { name: "Ideogram", description: "AI image generator with strong text rendering capabilities", link: "https://ideogram.ai/" },
      { name: "Leonardo.Ai", description: "Powerful image generation with customization options", link: "https://leonardo.ai/" },
      { name: "Midjourney", description: "Discord-based image generator known for artistic quality", link: "https://www.midjourney.com/" },
      { name: "DALL-E (via ChatGPT)", description: "OpenAI's image generator integrated with ChatGPT", link: "https://chat.openai.com/" },
      { name: "Gemini", description: "Google's multimodal AI with image generation capabilities", link: "https://gemini.google.com/" },
      { name: "Flux AI", description: "New AI image generator with advanced capabilities", link: "https://flux.ai/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different image options", node: "image" }
    ]
  },

  edit_image: {
    title: "Image Editing Tools",
    description: "Edit, enhance, or modify existing images:",
    tools: [
      { name: "Adobe Firefly", description: "Creative generative AI integrated with Adobe products", link: "https://www.adobe.com/products/firefly.html" },
      { name: "Canva AI", description: "User-friendly design platform with AI editing features", link: "https://www.canva.com/" },
      { name: "Krea", description: "AI image editing with intuitive interface", link: "https://www.krea.ai/" },
      { name: "Luminar Neo", description: "Photo editor with AI-powered enhancement tools", link: "https://skylum.com/luminar" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different image options", node: "image" }
    ]
  },

  design_image: {
    title: "AI Design Tools",
    description: "Create diagrams, designs, and visual assets:",
    tools: [
      { name: "Microsoft Designer", description: "AI-powered design tool for various visual content", link: "https://designer.microsoft.com/" },
      { name: "Diagram", description: "Create professional diagrams and flowcharts with AI", link: "https://diagram.com/" },
      { name: "Uizard", description: "Turn sketches into digital designs with AI", link: "https://uizard.io/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different image options", node: "image" }
    ]
  },

  // Video section with subcategories
  video: {
    title: "What kind of video content do you need?",
    options: [
      { text: "Generate video from text", node: "text_to_video" },
      { text: "Edit existing videos", node: "edit_video" },
      { text: "Create animated characters", node: "character_video" }
    ]
  },

  text_to_video: {
    title: "Text-to-Video Generation Tools",
    description: "Create videos directly from text prompts:",
    tools: [
      { name: "Runway ML", description: "Professional video generation with advanced controls", link: "https://runwayml.com/" },
      { name: "Pika", description: "User-friendly video generation from text or images", link: "https://pika.art/" },
      { name: "Sora", description: "OpenAI's text-to-video model (limited access)", link: "https://openai.com/sora" },
      { name: "Luma Labs", description: "AI video generation tools for creative professionals", link: "https://lumalabs.ai/" },
      { name: "Synthesys", description: "Text-to-video platform with multiple creative options", link: "https://synthesys.io/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different video options", node: "video" }
    ]
  },

  edit_video: {
    title: "AI Video Editing Tools",
    description: "Edit and enhance existing video content:",
    tools: [
      { name: "Descript", description: "Text-based video editor with AI features", link: "https://www.descript.com/" },
      { name: "Runway ML", description: "AI video editing with advanced effects", link: "https://runwayml.com/" },
      { name: "Kapwing", description: "Online video editor with AI assistance", link: "https://www.kapwing.com/" },
      { name: "Pictory", description: "Automatically create short videos from long-form content", link: "https://pictory.ai/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different video options", node: "video" }
    ]
  },

  character_video: {
    title: "AI Character Animation Tools",
    description: "Create animated characters and avatars:",
    tools: [
      { name: "D-ID", description: "Create talking avatars from still images", link: "https://www.d-id.com/" },
      { name: "Synthesia", description: "AI video generation with virtual presenters", link: "https://www.synthesia.io/" },
      { name: "HeyGen", description: "Create AI videos with virtual presenters", link: "https://www.heygen.com/" },
      { name: "Hour One", description: "AI-generated human presenters for video content", link: "https://hourone.ai/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different video options", node: "video" }
    ]
  },

  presentations: {
    title: "AI Presentation Tools",
    description: "Create and enhance presentations:",
    tools: [
      { name: "Gamma App", description: "AI-powered presentation creator with modern designs", link: "https://gamma.app/" },
      { name: "Beautiful.AI", description: "Create professional presentations with AI design assistance", link: "https://www.beautiful.ai/" },
      { name: "Pitch", description: "Collaborative presentation platform with AI features", link: "https://pitch.com/" },
      { name: "Tome", description: "AI-powered storytelling format for presentations", link: "https://tome.app/" },
      { name: "SlidesAI", description: "Generate entire presentations from text prompts", link: "https://www.slidesai.io/" },
      { name: "Microsoft Designer", description: "AI design tool with presentation capabilities", link: "https://designer.microsoft.com/" }
    ],
    options: [
      { text: "Start over", node: "start" }
    ]
  },

  documents: {
    title: "Document Analysis and Research Tools",
    description: "Tools for analyzing and working with documents:",
    tools: [
      { name: "NotebookLM", description: "Google's tool for note-taking and document analysis", link: "https://notebooklm.google.com/" },
      { name: "Elicit", description: "AI research assistant that helps with literature review", link: "https://elicit.org/" },
      { name: "Perplexity", description: "AI search engine that provides cited answers", link: "https://www.perplexity.ai/" },
      { name: "Consensus", description: "AI tool for searching and analyzing scientific papers", link: "https://consensus.app/" },
      { name: "Qdrant", description: "Vector database for document search and analysis", link: "https://qdrant.tech/" }
    ],
    options: [
      { text: "Start over", node: "start" }
    ]
  },

  audio: {
    title: "AI Audio Tools",
    description: "Generate and enhance audio content:",
    tools: [
      { name: "ElevenLabs", description: "High-quality AI voice generation and cloning", link: "https://elevenlabs.io/" },
      { name: "Descript", description: "Audio editing with text-based interface", link: "https://www.descript.com/" },
      { name: "Murf.ai", description: "AI voice generator for various applications", link: "https://murf.ai/" },
      { name: "Play.ht", description: "Convert text to natural-sounding speech", link: "https://play.ht/" },
      { name: "Soundraw", description: "AI music generation for content creators", link: "https://soundraw.io/" },
      { name: "AIVA", description: "AI composer for emotional soundtrack music", link: "https://www.aiva.ai/" }
    ],
    options: [
      { text: "Start over", node: "start" }
    ]
  },

  organization: {
    title: "What type of organization do you work in?",
    options: [
      { text: "Defense or Government Agency", node: "defense" },
      { text: "Education/Research", node: "education" }
    ]
  },

  defense: {
    title: "Security and Compliance Tools for Government",
    description: "Specialized tools for government and defense environments:",
    tools: [
      { name: "AskSage", description: "Government secure AI platform with IL5 authorization", link: "https://www.asksage.ai/" },
      { name: "Copilot for Government", description: "Microsoft's AI assistant built for government compliance", link: "https://www.microsoft.com/en-us/microsoft-365/government/microsoft-365-copilot-for-government" },
      { name: "Google Workspace with Gemini for Government", description: "Google's secure AI features for government use", link: "https://workspace.google.com/industries/government/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different options", node: "organization" }
    ]
  },

  education: {
    title: "Education and Research Tools",
    description: "AI tools tailored for educational environments:",
    tools: [
      { name: "Century", description: "AI learning platform for personalized education", link: "https://www.century.tech/" },
      { name: "Gradescope", description: "AI-assisted grading and assessment tool", link: "https://www.gradescope.com/" },
      { name: "Elicit", description: "Research assistant for literature review", link: "https://elicit.org/" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different options", node: "organization" }
    ]
  }
};

export default toolNodes;
