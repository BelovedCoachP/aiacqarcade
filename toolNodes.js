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
      { text: "Accessibility and UDL tools", node: "accessibility" },
      { text: "AI coding assistants", node: "coding" },
      { text: "Research and citation tools", node: "research" },
      { text: "Tools for Government or Education", node: "organization" }
    ]
  },

  // ── Text section ──
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
      { name: "ChatGPT (GPT-4o / o3)", description: "OpenAI's flagship assistant featuring GPT-4o multimodal and o3 advanced reasoning models", link: "https://chat.openai.com/", category: "Text Generation" },
      { name: "Claude (Opus 4.6 / Sonnet 4.5)", description: "Anthropic's frontier AI with deep reasoning, long-context support, and coding strength", link: "https://claude.ai/", category: "Text Generation" },
      { name: "Gemini 2.5 Pro", description: "Google's most capable multimodal model with 1M-token context and strong reasoning", link: "https://gemini.google.com/", category: "Text Generation" },
      { name: "You.com", description: "AI search engine combining web results with generative responses and citations", link: "https://you.com/", category: "Text Generation" },
      { name: "Mistral Large", description: "Open-weight European AI model with strong multilingual and coding capabilities", link: "https://mistral.ai/", category: "Text Generation" }
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
      { name: "Consensus", description: "AI-powered search engine for peer-reviewed scientific research with evidence-based answers", link: "https://consensus.app/", category: "Text Generation" },
      { name: "NotebookLM", description: "Google's AI research assistant that analyzes uploaded documents and generates audio overviews", link: "https://notebooklm.google.com/", category: "Text Generation" },
      { name: "Perplexity", description: "AI search engine providing real-time cited answers with Pro Search deep research mode", link: "https://www.perplexity.ai/", category: "Text Generation" },
      { name: "Gemini 2.5 Pro (Deep Research)", description: "Google's advanced model with Deep Research mode for multi-step investigation and reports", link: "https://gemini.google.com/", category: "Text Generation" }
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
      { name: "Sudowrite", description: "AI writing companion for fiction authors with story engine and prose enhancement", link: "https://www.sudowrite.com/", category: "Creative Writing" },
      { name: "NovelAI", description: "AI storytelling platform designed for narrative fiction with custom models", link: "https://novelai.net/", category: "Creative Writing" },
      { name: "Claude (Opus 4.6)", description: "Anthropic's most creative model, excellent for long-form fiction and nuanced writing", link: "https://claude.ai/", category: "Creative Writing" },
      { name: "Poe", description: "Platform aggregating multiple AI models for creative exploration and custom bots", link: "https://poe.com/", category: "Creative Writing" },
      { name: "Grok", description: "xAI's conversational AI with real-time knowledge and a distinctive personality", link: "https://grok.x.ai/", category: "Creative Writing" }
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
      { name: "GitHub Copilot", description: "AI pair programmer integrated into VS Code, JetBrains, and Neovim with chat and code completion", link: "https://github.com/features/copilot", category: "Coding" },
      { name: "Claude Code", description: "Anthropic's agentic coding tool for terminal-based development, debugging, and refactoring", link: "https://claude.ai/", category: "Coding" },
      { name: "Cursor", description: "AI-native code editor built on VS Code with deep codebase understanding and multi-file editing", link: "https://cursor.sh/", category: "Coding" },
      { name: "Amazon Q Developer", description: "AWS AI coding assistant with security scanning, code transformation, and chat (formerly CodeWhisperer)", link: "https://aws.amazon.com/q/developer/", category: "Coding" },
      { name: "Replit Agent", description: "AI agent that builds and deploys full-stack apps from natural language prompts", link: "https://replit.com/", category: "Coding" },
      { name: "Tabnine", description: "Privacy-focused AI code completion with on-premise deployment options", link: "https://www.tabnine.com/", category: "Coding" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different text options", node: "text" }
    ]
  },

  // ── Image section ──
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
      { name: "Midjourney", description: "Industry-leading image generator known for stunning artistic quality, now with a web editor", link: "https://www.midjourney.com/", category: "Image Generation" },
      { name: "DALL-E 3 (via ChatGPT)", description: "OpenAI's image generator integrated into ChatGPT with excellent prompt understanding", link: "https://chat.openai.com/", category: "Image Generation" },
      { name: "Ideogram 2.0", description: "AI image generator with best-in-class text rendering and typography in images", link: "https://ideogram.ai/", category: "Image Generation" },
      { name: "Adobe Firefly", description: "Adobe's commercially-safe generative AI trained on licensed content, integrated into Creative Cloud", link: "https://www.adobe.com/products/firefly.html", category: "Image Generation" },
      { name: "Leonardo.Ai", description: "Powerful image generation platform with fine-tuning, real-time canvas, and style control", link: "https://leonardo.ai/", category: "Image Generation" },
      { name: "Flux (by Black Forest Labs)", description: "Open-source image generation models with strong quality and customization options", link: "https://blackforestlabs.ai/", category: "Image Generation" },
      { name: "Gemini (Imagen 3)", description: "Google's image generation via Gemini, powered by Imagen 3 with photorealistic output", link: "https://gemini.google.com/", category: "Image Generation" }
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
      { name: "Adobe Firefly", description: "Generative fill, expand, and recolor tools integrated across Photoshop and Illustrator", link: "https://www.adobe.com/products/firefly.html", category: "Image Editing" },
      { name: "Canva AI (Magic Studio)", description: "One-click AI tools for background removal, image expansion, text-to-image, and design", link: "https://www.canva.com/", category: "Image Editing" },
      { name: "Krea", description: "Real-time AI image generation and editing with intuitive visual controls", link: "https://www.krea.ai/", category: "Image Editing" },
      { name: "Luminar Neo", description: "AI-powered photo editor with portrait enhancement, sky replacement, and lighting tools", link: "https://skylum.com/luminar", category: "Image Editing" },
      { name: "Clipdrop", description: "AI image cleanup, relighting, upscaling, and background removal by Stability AI", link: "https://clipdrop.co/", category: "Image Editing" }
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
      { name: "Canva AI", description: "All-in-one design platform with AI-powered templates, layouts, and brand kit integration", link: "https://www.canva.com/", category: "Design" },
      { name: "Microsoft Designer", description: "AI design tool for social posts, invitations, and visual content using DALL-E", link: "https://designer.microsoft.com/", category: "Design" },
      { name: "Figma AI", description: "Design platform with AI features for auto-layout, asset search, and prototyping", link: "https://www.figma.com/", category: "Design" },
      { name: "Uizard", description: "Turn screenshots, sketches, or text prompts into editable digital UI designs", link: "https://uizard.io/", category: "Design" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different image options", node: "image" }
    ]
  },

  // ── Video section ──
  video: {
    title: "What kind of video content do you need?",
    options: [
      { text: "Generate video from text", node: "text_to_video" },
      { text: "Edit existing videos", node: "edit_video" },
      { text: "Create AI avatars and presenters", node: "character_video" }
    ]
  },

  text_to_video: {
    title: "Text-to-Video Generation Tools",
    description: "Create videos directly from text prompts:",
    tools: [
      { name: "Sora", description: "OpenAI's video generation model creating realistic scenes up to 60 seconds from text prompts", link: "https://openai.com/sora", category: "Video Generation" },
      { name: "VEO 3", description: "Google DeepMind's latest video model with native audio generation and cinematic quality", link: "https://deepmind.google/technologies/veo/", category: "Video Generation" },
      { name: "Runway Gen-3 Alpha", description: "Professional video generation with fine-grained control over motion, style, and camera", link: "https://runwayml.com/", category: "Video Generation" },
      { name: "Pika 2.0", description: "Accessible video generator with scene modification, lip sync, and special effects", link: "https://pika.art/", category: "Video Generation" },
      { name: "Luma Dream Machine", description: "Fast, high-quality video generation from text and images with consistent characters", link: "https://lumalabs.ai/", category: "Video Generation" },
      { name: "Kling AI", description: "Kuaishou's video generation model with strong motion quality and up to 2-minute output", link: "https://klingai.com/", category: "Video Generation" }
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
      { name: "Descript", description: "Edit video by editing text — AI-powered transcription, filler-word removal, and eye contact correction", link: "https://www.descript.com/", category: "Video Editing" },
      { name: "Runway ML", description: "AI-powered video editing with inpainting, green screen, motion tracking, and Gen-3 effects", link: "https://runwayml.com/", category: "Video Editing" },
      { name: "Kapwing", description: "Browser-based video editor with AI auto-subtitles, smart cut, and resize for social media", link: "https://www.kapwing.com/", category: "Video Editing" },
      { name: "Pictory", description: "Turn long-form content into short branded videos with automatic highlights and captions", link: "https://pictory.ai/", category: "Video Editing" },
      { name: "OpusClip", description: "AI tool that turns long videos into viral short clips with auto-reframing and captions", link: "https://www.opus.pro/", category: "Video Editing" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different video options", node: "video" }
    ]
  },

  character_video: {
    title: "AI Avatar and Presenter Tools",
    description: "Create AI-generated presenters and talking avatars:",
    tools: [
      { name: "HeyGen", description: "Create professional AI videos with 100+ realistic avatars, instant translation, and voice cloning", link: "https://www.heygen.com/", category: "AI Avatars" },
      { name: "Synthesia", description: "Enterprise AI video platform with 230+ avatars and 140+ language support", link: "https://www.synthesia.io/", category: "AI Avatars" },
      { name: "D-ID", description: "Create talking-head videos from a single photo with natural facial animation", link: "https://www.d-id.com/", category: "AI Avatars" },
      { name: "Colossyan", description: "AI video creation platform focused on workplace learning with diverse avatar options", link: "https://www.colossyan.com/", category: "AI Avatars" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different video options", node: "video" }
    ]
  },

  // ── Presentations ──
  presentations: {
    title: "AI Presentation Tools",
    description: "Create and enhance presentations:",
    tools: [
      { name: "Gamma", description: "AI-powered presentation, document, and webpage creator with polished designs from a prompt", link: "https://gamma.app/", category: "Presentations" },
      { name: "Beautiful.AI", description: "Smart slide design with AI that automatically formats content into professional layouts", link: "https://www.beautiful.ai/", category: "Presentations" },
      { name: "Canva AI (Presentations)", description: "Design presentations with Magic Design, AI image generation, and brand-consistent templates", link: "https://www.canva.com/presentations/", category: "Presentations" },
      { name: "Pitch", description: "Collaborative presentation platform with AI drafting, custom templates, and analytics", link: "https://pitch.com/", category: "Presentations" },
      { name: "Tome", description: "AI storytelling tool that generates narrative-driven presentations from a prompt", link: "https://tome.app/", category: "Presentations" },
      { name: "SlidesAI", description: "Google Slides add-on that generates entire slide decks from text in seconds", link: "https://www.slidesai.io/", category: "Presentations" },
      { name: "Microsoft Copilot (PowerPoint)", description: "AI assistant that drafts, designs, and summarizes presentations inside PowerPoint", link: "https://copilot.microsoft.com/", category: "Presentations" }
    ],
    options: [
      { text: "Start over", node: "start" }
    ]
  },

  // ── Documents ──
  documents: {
    title: "Document Analysis and Research Tools",
    description: "Tools for analyzing and working with documents:",
    tools: [
      { name: "NotebookLM", description: "Google's AI notebook that analyzes your documents and can generate podcast-style audio summaries", link: "https://notebooklm.google.com/", category: "Document Analysis" },
      { name: "Elicit", description: "AI research assistant that finds relevant papers and extracts key findings from academic literature", link: "https://elicit.org/", category: "Document Analysis" },
      { name: "Perplexity", description: "AI answer engine with cited sources, Pro Search for deep research, and document upload support", link: "https://www.perplexity.ai/", category: "Document Analysis" },
      { name: "Consensus", description: "Search engine for peer-reviewed research that synthesizes findings across scientific papers", link: "https://consensus.app/", category: "Document Analysis" },
      { name: "Claude (Projects)", description: "Upload documents to Claude Projects for persistent analysis, Q&A, and summarization", link: "https://claude.ai/", category: "Document Analysis" }
    ],
    options: [
      { text: "Start over", node: "start" }
    ]
  },

  // ── Audio ──
  audio: {
    title: "AI Audio Tools",
    description: "Generate and enhance audio content:",
    tools: [
      { name: "ElevenLabs", description: "Industry-leading AI voice synthesis with voice cloning, dubbing, and sound effects generation", link: "https://elevenlabs.io/", category: "Audio" },
      { name: "Descript", description: "All-in-one audio/video editor with AI transcription, voice cloning, and filler-word removal", link: "https://www.descript.com/", category: "Audio" },
      { name: "Otter.ai", description: "AI meeting assistant with real-time transcription, summaries, and action item extraction", link: "https://otter.ai/", category: "Audio" },
      { name: "Suno", description: "AI music generator that creates full songs with vocals, instruments, and lyrics from text prompts", link: "https://suno.com/", category: "Audio" },
      { name: "Udio", description: "AI music creation platform producing high-fidelity tracks across genres from text descriptions", link: "https://www.udio.com/", category: "Audio" },
      { name: "Murf.ai", description: "AI voice generator with 120+ voices for voiceovers, e-learning, and marketing content", link: "https://murf.ai/", category: "Audio" },
      { name: "Play.ht", description: "Text-to-speech platform with ultra-realistic voices and API for developers", link: "https://play.ht/", category: "Audio" },
      { name: "Soundraw", description: "AI music generation for content creators with customizable mood, genre, and length", link: "https://soundraw.io/", category: "Audio" },
      { name: "AIVA", description: "AI composer for emotional soundtrack music used in films, games, and advertisements", link: "https://www.aiva.ai/", category: "Audio" }
    ],
    options: [
      { text: "Start over", node: "start" }
    ]
  },

  // ── Accessibility & UDL (NEW) ──
  accessibility: {
    title: "What accessibility area do you need help with?",
    options: [
      { text: "Captioning and transcription", node: "caption_tools" },
      { text: "Alt text and image descriptions", node: "alt_text_tools" },
      { text: "Reading level and language simplification", node: "reading_level_tools" }
    ]
  },

  caption_tools: {
    title: "AI Captioning and Transcription Tools",
    description: "Tools for generating captions, subtitles, and transcripts:",
    tools: [
      { name: "Otter.ai", description: "Real-time AI transcription for meetings and lectures with speaker identification and summaries", link: "https://otter.ai/", category: "Accessibility" },
      { name: "Descript", description: "Automatic transcription with word-level accuracy and easy caption export for video", link: "https://www.descript.com/", category: "Accessibility" },
      { name: "Rev", description: "AI and human-powered captioning service with high accuracy for video and audio", link: "https://www.rev.com/", category: "Accessibility" },
      { name: "Kapwing (Auto Subtitles)", description: "One-click AI subtitle generation with customizable styles for social media video", link: "https://www.kapwing.com/", category: "Accessibility" },
      { name: "Microsoft Stream (Auto Captions)", description: "Built-in AI captioning for Microsoft 365 video content with transcript search", link: "https://www.microsoft.com/en-us/microsoft-365/microsoft-stream", category: "Accessibility" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore other accessibility tools", node: "accessibility" }
    ]
  },

  alt_text_tools: {
    title: "AI Alt Text and Image Description Tools",
    description: "Tools that generate descriptions for images to improve accessibility:",
    tools: [
      { name: "ChatGPT (Vision)", description: "Upload images to GPT-4o for detailed, context-aware alt text and image descriptions", link: "https://chat.openai.com/", category: "Accessibility" },
      { name: "Claude (Vision)", description: "Anthropic's multimodal AI generates thorough image descriptions and alt text from uploads", link: "https://claude.ai/", category: "Accessibility" },
      { name: "Microsoft Copilot (Alt Text)", description: "Auto-generated alt text in Word, PowerPoint, and Outlook with manual override", link: "https://copilot.microsoft.com/", category: "Accessibility" },
      { name: "AltText.ai", description: "Dedicated alt text generation service with API, CMS plugins, and bulk processing", link: "https://alttext.ai/", category: "Accessibility" },
      { name: "Gemini 2.5 Pro (Vision)", description: "Google's multimodal model provides detailed image analysis and description generation", link: "https://gemini.google.com/", category: "Accessibility" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore other accessibility tools", node: "accessibility" }
    ]
  },

  reading_level_tools: {
    title: "Reading Level and Language Simplification Tools",
    description: "Tools that simplify text and adapt content for different reading levels:",
    tools: [
      { name: "Diffit", description: "AI tool that adapts any topic or text to specific grade levels with vocabulary support", link: "https://diffit.me/", category: "Accessibility" },
      { name: "Rewordify", description: "Simplifies difficult English text and provides vocabulary-building exercises", link: "https://rewordify.com/", category: "Accessibility" },
      { name: "Claude", description: "Prompt Claude to rewrite content at a target grade level with vocabulary scaffolding", link: "https://claude.ai/", category: "Accessibility" },
      { name: "Immersive Reader (Microsoft)", description: "Built-in reading tool with text-to-speech, syllable breakdown, and picture dictionary", link: "https://education.microsoft.com/en-us/resource/9b010288", category: "Accessibility" },
      { name: "Magic School (Reading Level)", description: "AI educator tool that adjusts text complexity for differentiated instruction", link: "https://magicschool.ai/", category: "Accessibility" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore other accessibility tools", node: "accessibility" }
    ]
  },

  // ── AI Coding Assistants (NEW) ──
  coding: {
    title: "What kind of coding help do you need?",
    options: [
      { text: "Code generation and completion", node: "code_generation" },
      { text: "Code review and quality", node: "code_review" },
      { text: "Terminal and CLI agents", node: "terminal_agents" }
    ]
  },

  code_generation: {
    title: "AI Code Generation Tools",
    description: "Tools that write and complete code from natural language:",
    tools: [
      { name: "GitHub Copilot", description: "AI pair programmer with inline completions, chat, and multi-file editing in VS Code and JetBrains", link: "https://github.com/features/copilot", category: "Code Generation" },
      { name: "Cursor", description: "AI-first code editor with codebase-aware chat, multi-file edits, and composer mode", link: "https://cursor.sh/", category: "Code Generation" },
      { name: "Replit Agent", description: "Full-stack AI agent that builds, debugs, and deploys complete apps from natural language", link: "https://replit.com/", category: "Code Generation" },
      { name: "Claude (Sonnet 4.5)", description: "Anthropic's fast coding model excelling at code generation, explanation, and debugging", link: "https://claude.ai/", category: "Code Generation" },
      { name: "Windsurf (Codeium)", description: "AI-powered IDE with intelligent code completion, search, and multi-file context", link: "https://codeium.com/windsurf", category: "Code Generation" },
      { name: "Amazon Q Developer", description: "AWS AI assistant for code generation, transformation, security scanning, and AWS integration", link: "https://aws.amazon.com/q/developer/", category: "Code Generation" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore other coding tools", node: "coding" }
    ]
  },

  code_review: {
    title: "AI Code Review Tools",
    description: "Tools that analyze code quality, find bugs, and suggest improvements:",
    tools: [
      { name: "GitHub Copilot (Code Review)", description: "AI-powered pull request review that suggests improvements and catches issues", link: "https://github.com/features/copilot", category: "Code Review" },
      { name: "CodeRabbit", description: "AI code reviewer that provides contextual PR reviews with summaries and improvement suggestions", link: "https://coderabbit.ai/", category: "Code Review" },
      { name: "Sourcery", description: "Automated code review focused on Python quality, complexity, and refactoring suggestions", link: "https://sourcery.ai/", category: "Code Review" },
      { name: "SonarQube (AI)", description: "Code quality platform with AI-enhanced bug detection, security analysis, and tech debt tracking", link: "https://www.sonarsource.com/products/sonarqube/", category: "Code Review" },
      { name: "Snyk Code", description: "AI-powered security scanning that finds and fixes vulnerabilities in real-time as you code", link: "https://snyk.io/product/snyk-code/", category: "Code Review" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore other coding tools", node: "coding" }
    ]
  },

  terminal_agents: {
    title: "AI Terminal and CLI Agents",
    description: "AI agents that work directly in your terminal and command line:",
    tools: [
      { name: "Claude Code", description: "Anthropic's agentic CLI tool for coding, debugging, git operations, and multi-file refactoring", link: "https://docs.anthropic.com/en/docs/claude-code", category: "Terminal Agents" },
      { name: "GitHub Copilot CLI", description: "AI-powered command-line tool that suggests shell commands and explains errors", link: "https://github.com/features/copilot", category: "Terminal Agents" },
      { name: "Aider", description: "Open-source AI pair programming tool that edits code in your local git repo via terminal", link: "https://aider.chat/", category: "Terminal Agents" },
      { name: "Warp AI", description: "Modern terminal with built-in AI that explains commands, debugs errors, and suggests workflows", link: "https://www.warp.dev/", category: "Terminal Agents" },
      { name: "Open Interpreter", description: "Open-source tool that lets language models run code locally via a terminal chat interface", link: "https://openinterpreter.com/", category: "Terminal Agents" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore other coding tools", node: "coding" }
    ]
  },

  // ── Research & Citation (NEW) ──
  research: {
    title: "What research task do you need help with?",
    options: [
      { text: "Finding academic literature", node: "lit_search" },
      { text: "Managing citations and references", node: "citation_managers" },
      { text: "Summarizing papers and content", node: "summarization" }
    ]
  },

  lit_search: {
    title: "AI Literature Search Tools",
    description: "Tools that help you find and explore academic research:",
    tools: [
      { name: "Elicit", description: "AI research assistant that searches 200M+ papers and extracts key findings automatically", link: "https://elicit.org/", category: "Literature Search" },
      { name: "Semantic Scholar", description: "AI-powered academic search engine with citation analysis and research recommendations", link: "https://www.semanticscholar.org/", category: "Literature Search" },
      { name: "Consensus", description: "AI search engine that synthesizes findings from peer-reviewed scientific papers", link: "https://consensus.app/", category: "Literature Search" },
      { name: "Perplexity (Academic)", description: "AI search with academic focus mode for finding and citing scholarly sources", link: "https://www.perplexity.ai/", category: "Literature Search" },
      { name: "Connected Papers", description: "Visual tool that maps relationships between academic papers for literature discovery", link: "https://www.connectedpapers.com/", category: "Literature Search" },
      { name: "Scite", description: "AI platform showing how papers are cited — supporting, contrasting, or mentioning claims", link: "https://scite.ai/", category: "Literature Search" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore other research tools", node: "research" }
    ]
  },

  citation_managers: {
    title: "AI-Enhanced Citation Managers",
    description: "Tools for organizing references and generating citations:",
    tools: [
      { name: "Zotero (with AI plugins)", description: "Free, open-source reference manager with AI plugins for summarization and PDF analysis", link: "https://www.zotero.org/", category: "Citations" },
      { name: "Mendeley", description: "Elsevier's reference manager with AI-powered article recommendations and collaborative features", link: "https://www.mendeley.com/", category: "Citations" },
      { name: "Paperpile", description: "Modern reference manager with AI-assisted search, one-click import, and Google Docs integration", link: "https://paperpile.com/", category: "Citations" },
      { name: "EndNote", description: "Professional-grade reference manager with AI-powered deduplication and manuscript matching", link: "https://endnote.com/", category: "Citations" },
      { name: "Scispace (Typeset)", description: "AI tool that reads papers, explains concepts, and generates properly formatted citations", link: "https://typeset.io/", category: "Citations" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore other research tools", node: "research" }
    ]
  },

  summarization: {
    title: "AI Summarization Tools",
    description: "Tools that condense papers, articles, and long content:",
    tools: [
      { name: "NotebookLM", description: "Upload research papers and get AI summaries, Q&A, and even audio podcast-style overviews", link: "https://notebooklm.google.com/", category: "Summarization" },
      { name: "Claude (Long Context)", description: "Summarize documents up to 200K tokens with Anthropic's models — ideal for entire papers or books", link: "https://claude.ai/", category: "Summarization" },
      { name: "ChatGPT (GPT-4o)", description: "Upload PDFs and get summaries, key takeaways, and answers about any document", link: "https://chat.openai.com/", category: "Summarization" },
      { name: "Scholarcy", description: "AI summarizer purpose-built for academic papers — extracts claims, methods, and key references", link: "https://www.scholarcy.com/", category: "Summarization" },
      { name: "Scispace (Typeset)", description: "AI copilot for research papers that explains, highlights, and summarizes while you read", link: "https://typeset.io/", category: "Summarization" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore other research tools", node: "research" }
    ]
  },

  // ── Organization-specific ──
  organization: {
    title: "What type of organization do you work in?",
    options: [
      { text: "Defense or Government Agency", node: "defense" },
      { text: "Education / Research", node: "education" }
    ]
  },

  defense: {
    title: "Security and Compliance Tools for Government",
    description: "Specialized tools for government and defense environments:",
    tools: [
      { name: "AskSage", description: "FedRAMP-authorized, IL5-certified AI platform purpose-built for government agencies", link: "https://www.asksage.ai/", category: "Government" },
      { name: "Microsoft 365 Copilot for Government", description: "AI assistant with GCC High and DoD compliance for government Microsoft 365 environments", link: "https://www.microsoft.com/en-us/microsoft-365/government/microsoft-365-copilot-for-government", category: "Government" },
      { name: "Google Workspace with Gemini (Gov)", description: "FedRAMP-authorized Gemini AI features within Google Workspace for government agencies", link: "https://workspace.google.com/industries/government/", category: "Government" },
      { name: "Amazon Bedrock (GovCloud)", description: "AWS managed AI service in GovCloud with access to multiple foundation models for government use", link: "https://aws.amazon.com/govcloud-us/", category: "Government" }
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
      { name: "Magic School", description: "AI platform for educators with 60+ tools for lesson planning, rubrics, IEPs, and differentiation", link: "https://magicschool.ai/", category: "Education" },
      { name: "SchoolAI", description: "AI learning platform with customizable student-facing spaces and teacher dashboards", link: "https://www.schoolai.com/", category: "Education" },
      { name: "Eduaide.AI", description: "AI teaching assistant generating lesson plans, assessments, and instructional content", link: "https://eduaide.ai/", category: "Education" },
      { name: "Quizizz (AI)", description: "Gamified assessment platform with AI quiz generation and adaptive learning features", link: "https://quizizz.com/", category: "Education" },
      { name: "Gradescope", description: "AI-assisted grading platform for handwritten and coded assignments with rubric-based feedback", link: "https://www.gradescope.com/", category: "Education" },
      { name: "Century Tech", description: "AI learning platform that creates personalized learning paths based on cognitive science", link: "https://www.century.tech/", category: "Education" },
      { name: "Questionwell", description: "AI question generator that creates assessments from any uploaded content or topic", link: "https://questionwell.org/", category: "Education" },
      { name: "NotebookLM", description: "Google's AI notebook — great for student research, source analysis, and study guide creation", link: "https://notebooklm.google.com/", category: "Education" }
    ],
    options: [
      { text: "Start over", node: "start" },
      { text: "Explore different options", node: "organization" }
    ]
  }
};

export default toolNodes;
