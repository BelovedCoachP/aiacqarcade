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

  text: {
    title: "General Text Generation Tools",
    description: "These tools can help with everyday writing tasks and brainstorming:",
    tools: [
      { name: "ChatGPT (Free version)", description: "Versatile AI assistant for various text generation needs", link: "https://chat.openai.com/" },
      { name: "Claude.AI", description: "Anthropic's conversational AI with strong reasoning capabilities", link: "https://claude.ai/" },
      { name: "Gemini", description: "Google's multimodal AI that can process text, images, and more", link: "https://gemini.google.com/" },
      { name: "You.com", description: "AI search that combines web results with generative responses", link: "https://you.com/" },
      { name: "Mistral", description: "Open-weight AI model with powerful language capabilities", link: "https://mistral.ai/" }
    ]
  },

  image: {
    title: "Image Generation Tools",
    description: "Create original images from text prompts:",
    tools: [
      { name: "Ideogram", description: "AI image generator with strong text rendering capabilities", link: "https://ideogram.ai/" },
      { name: "Leonardo.Ai", description: "Powerful image generation with customization options", link: "https://leonardo.ai/" },
      { name: "Midjourney", description: "Discord-based image generator known for artistic quality", link: "https://www.midjourney.com/" },
      { name: "DALL-E (via ChatGPT)", description: "OpenAI's image generator integrated with ChatGPT", link: "https://chat.openai.com/" },
      { name: "Gemini", description: "Google's multimodal AI with image generation capabilities", link: "https://gemini.google.com/" },
      { name: "Flux AI", description: "New AI image generator with advanced capabilities", link: "https://flux.ai/" }
    ]
  },

  video: {
    title: "Text-to-Video Generation Tools",
    description: "Create videos directly from text prompts:",
    tools: [
      { name: "Runway ML", description: "Professional video generation with advanced controls", link: "https://runwayml.com/" },
      { name: "Pika", description: "User-friendly video generation from text or images", link: "https://pika.art/" },
      { name: "Sora", description: "OpenAI's text-to-video model (limited access)", link: "https://openai.com/sora" },
      { name: "Luma Labs", description: "AI video generation tools for creative professionals", link: "https://lumalabs.ai/" },
      { name: "Synthesys", description: "Text-to-video platform with multiple creative options", link: "https://synthesys.io/" }
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
    ]
  },

  education: {
    title: "Coming Soon",
    description: "Our AI education and research tools are launching soon. Stay tuned! 🚀"
  }
};

export default toolNodes;
