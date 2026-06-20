(() => {
  const LINKS = {
    event: "https://jonathankhobson.github.io/gm/events/goldspire/",
    events: "https://jonathankhobson.github.io/gm/events/"
  };

  const tags = {
    local: ["#Daggerheart", "#TTRPG", "#ChandlerAZ", "#PhoenixAZ", "#TabletopRPG"],
    simple: ["#Daggerheart", "#TTRPG", "#TabletopRPG"],
    newcomer: ["#TabletopRPG", "#BeginnerFriendly", "#ChandlerAZ", "#PhoenixAZ"],
    tiktok: ["#Daggerheart", "#TTRPG", "#TabletopRPG", "#PhoenixAZ"],
    linkedin: ["#UXWriting", "#GameDesign", "#Facilitation"]
  };

  const assets = {
    "evergreen-find-table-square": {
      file: "../assets/selected/evergreen-find-table-square.png",
      label: "Evergreen find-a-table square",
      use: "Recurring events and general calendar CTA",
      alt: "Fantasy party poster for Peril to Profit with QR code and evergreen event call to action."
    },
    "evergreen-event-options-wide": {
      file: "../assets/selected/evergreen-event-options-wide.png",
      label: "Evergreen event options wide",
      use: "Facebook, link preview, Reddit permission post",
      alt: "Wide fantasy promo image with party, forest path, QR code, and event-options call to action."
    },
    "evergreen-current-dates-poster": {
      file: "../assets/selected/evergreen-current-dates-poster.png",
      label: "Evergreen current-dates poster",
      use: "Recurring series reminder",
      alt: "Vertical fantasy poster for recurring Daggerheart events with QR code and current-dates language."
    },
    "simple-daggerheart-square": {
      file: "../assets/selected/simple-daggerheart-square.png",
      label: "Simple Daggerheart square",
      use: "Daggerheart-curious audience",
      alt: "Simple social graphic reading Daggerheart one-shot and beginner-friendly with QR code."
    },
    "simple-daggerheart-story": {
      file: "../assets/selected/simple-daggerheart-story.png",
      label: "Simple Daggerheart story",
      use: "Stories, Reels, TikTok still-image post",
      alt: "Vertical simple Daggerheart one-shot graphic with beginner-friendly message and QR code."
    },
    "simple-try-wide": {
      file: "../assets/selected/simple-try-wide.png",
      label: "Simple try Daggerheart wide",
      use: "Short-platform and link-preview copy",
      alt: "Wide simple graphic inviting viewers to try Daggerheart with a QR code."
    },
    "newcomer-live-fantasy-square": {
      file: "../assets/selected/newcomer-live-fantasy-square.png",
      label: "Newcomer live-fantasy square",
      use: "Total newcomer reassurance",
      alt: "Beginner-friendly tabletop roleplaying social graphic for people curious about live fantasy play."
    },
    "newcomer-tabletop-square": {
      file: "../assets/selected/newcomer-tabletop-square.png",
      label: "Newcomer tabletop square",
      use: "No-homework beginner invitation",
      alt: "Simple newcomer-focused tabletop roleplaying graphic with QR code."
    },
    "july7-ai-square": {
      file: "../assets/selected/july7-ai-square.png",
      label: "July 7 AI poster square",
      use: "Date-specific July 7 promotion",
      alt: "Square Peril to Profit poster with party, forest path, July 7 date, and QR code."
    },
    "july7-ai-wide": {
      file: "../assets/selected/july7-ai-wide.png",
      label: "July 7 AI poster wide",
      use: "Facebook date-specific post and link preview",
      alt: "Wide Peril to Profit poster with party, forest path, July 7 date, and QR code."
    },
    "pc-marlowe": {
      file: "../assets/selected/pc-marlowe.png",
      label: "PC spotlight: Marlowe",
      use: "Character-choice engagement post",
      alt: "Marlowe Fairwind, a glamorous fantasy spellcaster in green and gold."
    },
    "pc-barnacle": {
      file: "../assets/selected/pc-barnacle.png",
      label: "PC spotlight: Barnacle",
      use: "Character-choice engagement post",
      alt: "Barnacle, a small frog-like fantasy adventurer with a patched cloak and big curious eyes."
    },
    "pc-garrick": {
      file: "../assets/selected/pc-garrick.png",
      label: "PC spotlight: Garrick",
      use: "Character-choice engagement post",
      alt: "Garrick Reed, a smiling armored fantasy hero with a red scarf and sword."
    },
    "pc-khari": {
      file: "../assets/selected/pc-khari.png",
      label: "PC spotlight: Khari",
      use: "Character-choice engagement post",
      alt: "Khari Nix, a powerful armored warrior resting a large axe across her shoulders."
    },
    "pc-varian": {
      file: "../assets/selected/pc-varian.png",
      label: "PC spotlight: Varian",
      use: "Character-choice engagement post",
      alt: "Varian Soto, a tiger-like archer in leather and green traveling gear."
    }
  };

  const templates = [
    {
      id: "tpl-daggerheart-curious",
      name: "Daggerheart-Curious Short",
      audience: "Daggerheart-curious",
      body: `Daggerheart one-shot. Beginner-friendly. Premade heroes. Rules taught at the table.\n\nIf you have been curious about the Hope and Fear dice, this is the low-pressure test drive.\n\nCurrent event options: ${LINKS.events}`,
      hashtags: tags.simple
    },
    {
      id: "tpl-newcomer",
      name: "Total Newcomer Reassurance",
      audience: "Total newcomer",
      body: `Curious about tabletop RPGs, but not trying to do homework first?\n\nThis is a beginner-friendly fantasy one-shot. No rulebook. No prep. No pressure to do voices. Just show up, pick a premade hero, and make some wonderfully questionable decisions.\n\nDetails: ${LINKS.events}`,
      hashtags: tags.newcomer
    },
    {
      id: "tpl-july7",
      name: "July 7 Direct Event",
      audience: "Date-specific",
      body: `Peril to Profit: The Goldspire Messengers is running Tuesday, July 7, 2026 at Mox Boarding House Chandler.\n\nBeginner-friendly Daggerheart one-shot. No experience needed. Premade characters provided. Rules taught at the table.\n\nDetails: ${LINKS.event}`,
      hashtags: tags.local
    },
    {
      id: "tpl-linkedin-process",
      name: "LinkedIn Process Reflection",
      audience: "Professional",
      body: `I have been turning a tabletop RPG event into a small UX writing problem: how do you invite someone into a new rules system without making the invitation feel like homework?\n\nThe answer has been ruthless clarity: who it is for, what they need to know, what they do not need to know, and what anxieties the page should quietly remove.`,
      hashtags: tags.linkedin
    },
    {
      id: "tpl-reddit-permission",
      name: "Reddit Permission-First",
      audience: "Local community",
      body: `I am local to the Phoenix Valley and running beginner-friendly Daggerheart one-shots at Mox Boarding House Chandler. Before I post details here, are event listings like that welcome in this community, or is there a preferred weekly thread?`,
      hashtags: []
    }
  ];

  const ads = [
    {
      id: "ad-5-direct",
      budget: "$5",
      title: "Direct Daggerheart curiosity boost",
      channel: "Meta boost",
      asset: "simple-daggerheart-square",
      audience: "10-15 mile radius around Chandler, AZ; tabletop games, board games, Dungeons & Dragons, fantasy, local events.",
      copy: "Daggerheart one-shot in Chandler. Beginner-friendly, premade heroes, rules taught at the table. Scan or tap for current event details.",
      success: "One local comment, DM, share, or visible link-click cluster."
    },
    {
      id: "ad-15-split",
      budget: "$15",
      title: "July 7 plus evergreen split",
      channel: "Meta boost",
      asset: "july7-ai-square, evergreen-find-table-square",
      audience: "Chandler/Mesa/Tempe/Gilbert/Phoenix Valley. Keep radius tight.",
      copy: "Run one date-specific July 7 post and one evergreen current-dates post.",
      success: "Clearer signal about whether urgency or recurring availability gets more response."
    },
    {
      id: "ad-30-max",
      budget: "$30 max",
      title: "Three-angle learning test",
      channel: "Meta boost only unless a specific TikTok/Reddit buy is approved later.",
      asset: "july7-ai-square, simple-daggerheart-square, newcomer-tabletop-square",
      audience: "Local radius, tabletop interests, fantasy games, board game cafe/store interests.",
      copy: "Test date urgency, Daggerheart curiosity, and total-newcomer reassurance.",
      success: "Comments, DMs, shares, seat claims, or confusion themes worth rewriting around."
    }
  ];

  const posts = [
    {
      id: "p-2026-06-19-soft-launch",
      date: "2026-06-19",
      time: "18:15",
      title: "Soft launch: recurring table awareness",
      pillar: "Evergreen availability",
      audience: "Local fantasy/tabletop curious",
      asset: "evergreen-find-table-square",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "First public touch after the asset packet. Avoid Juneteenth jokes or urgency.",
      platforms: {
        instagram: [
          {
            label: "Warm direct",
            caption: `I am starting a run of beginner-friendly Daggerheart one-shots at Mox Boarding House Chandler.\n\nNo rulebook. No character build. No secret handshake. Just a premade hero, a suspicious delivery contract, and a forest with opinions.\n\nSee current event options: ${LINKS.events}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "Local context",
            caption: `I am putting together beginner-friendly Daggerheart one-shots at Mox Boarding House Chandler.\n\nThese are designed for both tabletop regulars who want to try Daggerheart and total newcomers who just want a fun, low-pressure first table. Premade characters are provided and the rules are taught as we play.\n\nCurrent event options will live here: ${LINKS.events}`,
            hashtags: []
          }
        ],
        threads: [
          {
            label: "Short hook",
            caption: `Beginner-friendly Daggerheart one-shots are coming to Mox Boarding House Chandler. Premade heroes, rules taught at the table, extremely normal delivery contracts.\n\n${LINKS.events}`,
            hashtags: ["#Daggerheart", "#TTRPG"]
          }
        ]
      }
    },
    {
      id: "p-2026-06-20-daggerheart-simple",
      date: "2026-06-20",
      time: "11:00",
      title: "Simple Daggerheart offer",
      pillar: "Daggerheart curiosity",
      audience: "TTRPG players",
      asset: "simple-daggerheart-square",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "If referencing Free RPG Day, verify date before posting. Current copy avoids depending on it.",
      platforms: {
        instagram: [
          {
            label: "Simple",
            caption: `Daggerheart one-shot. Beginner-friendly. In person at Mox Boarding House Chandler.\n\nPremade characters provided. Rules taught at the table. Come see how Hope and Fear feel in play.\n\nCurrent dates: ${LINKS.events}`,
            hashtags: tags.local
          },
          {
            label: "D&D bridge",
            caption: `Played D&D and curious about Daggerheart?\n\nThis is the easy test drive: one session, premade heroes, rules taught at the table, no book required.\n\nCurrent event options: ${LINKS.events}`,
            hashtags: tags.simple
          }
        ],
        tiktok: [
          {
            label: "Still image caption",
            caption: `Want to try Daggerheart without buying the book first? Beginner-friendly one-shots are coming to Mox Boarding House Chandler. Current dates: ${LINKS.events}`,
            hashtags: tags.tiktok
          }
        ],
        x: [
          {
            label: "Short",
            caption: `Daggerheart one-shot in Chandler. Beginner-friendly, premade heroes, rules taught at the table. Current dates: ${LINKS.events}`,
            hashtags: ["#Daggerheart", "#TTRPG"]
          }
        ]
      }
    },
    {
      id: "p-2026-06-21-newcomer",
      date: "2026-06-21",
      time: "16:30",
      title: "Newcomer reassurance",
      pillar: "No homework",
      audience: "Total newcomers",
      asset: "newcomer-tabletop-square",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Lead with reassurance, not lore.",
      platforms: {
        facebook: [
          {
            label: "Full reassurance",
            caption: `Curious about tabletop roleplaying games but worried you missed the class where everyone learned the secret rules?\n\nGood news: there was no class. Also, the secret rules are mostly snacks and bad decisions.\n\nI am running beginner-friendly fantasy one-shots at Mox Boarding House Chandler. No experience needed, no rulebook, no prep, no pressure to do voices. Premade characters are provided and I teach the rules as we play.\n\nDetails and current dates: ${LINKS.events}`,
            hashtags: []
          }
        ],
        instagram: [
          {
            label: "Short reassurance",
            caption: `Never played a tabletop RPG? Perfect.\n\nNo rulebook. No prep. No pressure to do voices. Pick a premade hero and make a few brave, funny, probably questionable choices.\n\nCurrent dates: ${LINKS.events}`,
            hashtags: tags.newcomer
          }
        ]
      }
    },
    {
      id: "p-2026-06-23-july7-announce",
      date: "2026-06-23",
      time: "19:00",
      title: "July 7 announcement",
      pillar: "Date-specific",
      audience: "Local tabletop and newcomer mix",
      asset: "july7-ai-square",
      ctaLink: LINKS.event,
      status: "draft",
      notes: "Primary July 7 push. Date, place, and beginner promise must stay visible.",
      platforms: {
        instagram: [
          {
            label: "Main event post",
            caption: `Peril to Profit: The Goldspire Messengers\nTuesday, July 7, 2026\nMox Boarding House Chandler\n\nA beginner-friendly Daggerheart one-shot about a simple delivery contract that is definitely, legally, spiritually, and financially fine.\n\nNo experience needed. Premade characters provided. Rules taught at the table.\n\nDetails: ${LINKS.event}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "Longer listing",
            caption: `I am running Peril to Profit: The Goldspire Messengers on Tuesday, July 7, 2026 at Mox Boarding House Chandler.\n\nIt is a beginner-friendly Daggerheart one-shot: premade characters, rules taught at the table, and no pressure to already know the system or perform character voices. If you have played D&D and want to try Daggerheart, this is a clean test drive. If you have never played a tabletop RPG before, this is built for you too.\n\nThe contract says deliver the crate. The forest knows better.\n\nDetails: ${LINKS.event}`,
            hashtags: []
          }
        ],
        threads: [
          {
            label: "Compressed",
            caption: `July 7 at Mox Boarding House Chandler: beginner-friendly Daggerheart one-shot, premade heroes, rules taught at the table.\n\nThe contract says deliver the crate. The forest knows better.\n\n${LINKS.event}`,
            hashtags: ["#Daggerheart", "#TTRPG"]
          }
        ]
      }
    },
    {
      id: "p-2026-06-24-linkedin-ux",
      date: "2026-06-24",
      time: "09:00",
      title: "LinkedIn: invitation as UX writing",
      pillar: "Professional process",
      audience: "UX/design/professional network",
      asset: "evergreen-event-options-wide",
      ctaLink: "",
      status: "draft",
      notes: "No hard CTA. Mention the event as a case study, not an ad.",
      platforms: {
        linkedin: [
          {
            label: "UX writing reflection",
            caption: `I have been treating a tabletop RPG event listing like a UX writing challenge.\n\nThe audience split is sharp: some people know tabletop RPGs and just want to try a new system; others are curious but worried they will slow the table down or be expected to perform.\n\nSo the copy has to do two jobs at once: keep the offer specific for experienced players, while quietly removing anxiety for newcomers.\n\nThe highest-value lines have been the least flashy ones: no experience needed, premade characters provided, rules taught at the table, no pressure to do voices.\n\nThat is good onboarding design in miniature: reduce the cost of saying yes.`,
            hashtags: tags.linkedin
          }
        ]
      }
    },
    {
      id: "p-2026-06-25-hope-fear",
      date: "2026-06-25",
      time: "18:30",
      title: "Hope and Fear curiosity",
      pillar: "Daggerheart curiosity",
      audience: "TTRPG players",
      asset: "simple-try-wide",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Do not over-explain rules. The goal is curiosity.",
      platforms: {
        instagram: [
          {
            label: "Hope/Fear hook",
            caption: `Heard people talk about Daggerheart's Hope and Fear dice and want to see what that actually feels like at a table?\n\nI am running beginner-friendly one-shots at Mox Boarding House Chandler. Premades provided. Rules taught as we play.\n\nCurrent dates: ${LINKS.events}`,
            hashtags: tags.local
          }
        ],
        bluesky: [
          {
            label: "Short",
            caption: `Curious how Daggerheart's Hope and Fear dice feel in play? I am running beginner-friendly one-shots in Chandler with premades and rules taught at the table.\n\n${LINKS.events}`,
            hashtags: ["#Daggerheart", "#TTRPG"]
          }
        ],
        x: [
          {
            label: "Short",
            caption: `Curious about Daggerheart's Hope/Fear dice? Beginner-friendly one-shots in Chandler, premades provided. ${LINKS.events}`,
            hashtags: ["#Daggerheart", "#TTRPG"]
          }
        ]
      }
    },
    {
      id: "p-2026-06-26-tiktok-one-shot",
      date: "2026-06-26",
      time: "17:45",
      title: "TikTok script: what is a one-shot?",
      pillar: "Newcomer education",
      audience: "Newcomers and lapsed players",
      asset: "simple-daggerheart-story",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Record as direct-to-camera or use still image with music and on-screen caption.",
      platforms: {
        tiktok: [
          {
            label: "20-second script",
            caption: `Script:\nWant to try a tabletop RPG without committing to a whole campaign?\n\nThat is what a one-shot is: one table, one story, one session. I bring the premade heroes, teach the rules, and you get to make dramatic decisions with dice.\n\nI am running beginner-friendly Daggerheart one-shots in Chandler. Current dates are in the link.\n\nCaption: Beginner-friendly Daggerheart one-shots at Mox Boarding House Chandler. ${LINKS.events}`,
            hashtags: tags.tiktok
          }
        ],
        instagram: [
          {
            label: "Story text",
            caption: `Story frame text:\n\nWhat is a one-shot?\nOne session.\nPremade hero.\nRules taught live.\nA full fantasy story in one sitting.\n\nCurrent dates: ${LINKS.events}`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-06-27-pc-marlowe",
      date: "2026-06-27",
      time: "12:00",
      title: "PC spotlight: Marlowe",
      pillar: "Character choice",
      audience: "Roleplay-curious players",
      asset: "pc-marlowe",
      ctaLink: LINKS.event,
      status: "draft",
      notes: "Character posts should be fun but not lore-dense.",
      platforms: {
        instagram: [
          {
            label: "Character pick",
            caption: `Premade hero preview: Marlowe Fairwind.\n\nElegant? Yes. Magical? Obviously. Prepared to treat a corporate delivery contract like a personal brand opportunity? Almost certainly.\n\nPeril to Profit runs July 7 at Mox Boarding House Chandler. Details: ${LINKS.event}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "Character context",
            caption: `One of the premade heroes for Peril to Profit: Marlowe Fairwind.\n\nPremades are there so nobody has homework before the table. You can show up, pick the hero who speaks to you, and learn Daggerheart as we play.\n\nJuly 7 details: ${LINKS.event}`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-06-29-facebook-context",
      date: "2026-06-29",
      time: "18:00",
      title: "Facebook longer event context",
      pillar: "Date-specific",
      audience: "Facebook local network",
      asset: "july7-ai-wide",
      ctaLink: LINKS.event,
      status: "draft",
      notes: "Good shareable post for personal network.",
      platforms: {
        facebook: [
          {
            label: "Shareable",
            caption: `I am running a beginner-friendly Daggerheart one-shot at Mox Boarding House Chandler on Tuesday, July 7.\n\nThe setup: you are hired for a simple delivery job by a company that has never, in the history of fantasy commerce, made a questionable decision. The contract says deliver the crate. The forest knows better.\n\nThis is built for people who want a low-pressure way to try Daggerheart or tabletop RPGs in general. No rulebook, no prep, no Daggerheart experience needed, and no pressure to perform voices. Premade characters are provided and the rules are taught at the table.\n\nDetails: ${LINKS.event}`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-06-30-pc-barnacle",
      date: "2026-06-30",
      time: "19:00",
      title: "PC spotlight: Barnacle",
      pillar: "Character choice",
      audience: "Newcomers and character-first players",
      asset: "pc-barnacle",
      ctaLink: LINKS.event,
      status: "draft",
      notes: "Use humor. Barnacle is a strong newcomer-friendly hook.",
      platforms: {
        instagram: [
          {
            label: "Tiny hero",
            caption: `Premade hero preview: Barnacle.\n\nSmall? Yes. Capable? Also yes. Legally responsible for what happens next? Absolutely not, that is what paperwork is for.\n\nBeginner-friendly Daggerheart on July 7 at Mox Chandler. ${LINKS.event}`,
            hashtags: tags.local
          }
        ],
        threads: [
          {
            label: "Short",
            caption: `Premade hero preview: Barnacle. Small adventurer, enormous "this seems fine" energy.\n\nJuly 7 Daggerheart one-shot at Mox Chandler: ${LINKS.event}`,
            hashtags: ["#Daggerheart"]
          }
        ]
      }
    },
    {
      id: "p-2026-07-01-contract-hook",
      date: "2026-07-01",
      time: "18:30",
      title: "Corporate fantasy hook",
      pillar: "Campaign tone",
      audience: "Mixed",
      asset: "evergreen-event-options-wide",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Evergreen version. Do not mention July unless confirmed in final edit.",
      platforms: {
        instagram: [
          {
            label: "Hook first",
            caption: `The contract says deliver the crate.\nThe forest knows better.\n\nBeginner-friendly Daggerheart one-shots at Mox Boarding House Chandler. Current dates and event options: ${LINKS.events}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "Warm",
            caption: `The contract says deliver the crate. The forest knows better.\n\nI am running beginner-friendly Daggerheart one-shots at Mox Boarding House Chandler for both total newcomers and tabletop players curious about the system. Premade heroes, rules taught at the table, no homework.\n\nCurrent dates: ${LINKS.events}`,
            hashtags: []
          }
        ],
        bluesky: [
          {
            label: "Short",
            caption: `The contract says deliver the crate. The forest knows better.\n\nBeginner-friendly Daggerheart one-shots in Chandler: ${LINKS.events}`,
            hashtags: ["#Daggerheart", "#TTRPG"]
          }
        ]
      }
    },
    {
      id: "p-2026-07-02-july7-reminder",
      date: "2026-07-02",
      time: "19:15",
      title: "July 7 reminder",
      pillar: "Date-specific",
      audience: "Local",
      asset: "july7-ai-square",
      ctaLink: LINKS.event,
      status: "draft",
      notes: "Five-day reminder. Check seat status before posting.",
      platforms: {
        instagram: [
          {
            label: "Seat reminder",
            caption: `July 7 at Mox Boarding House Chandler: beginner-friendly Daggerheart one-shot.\n\nNo experience needed. Premade characters provided. Rules taught at the table.\n\nThe job is simple. That is how they get you.\n\nDetails: ${LINKS.event}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "Seat reminder",
            caption: `Reminder: Peril to Profit runs Tuesday, July 7 at Mox Boarding House Chandler.\n\nThis is a beginner-friendly Daggerheart one-shot with premade characters and rules taught at the table. Great for Daggerheart-curious TTRPG players or people who have never tried a tabletop RPG before.\n\nDetails: ${LINKS.event}`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-07-03-tiktok-still",
      date: "2026-07-03",
      time: "17:30",
      title: "TikTok still image with music",
      pillar: "Simple offer",
      audience: "TikTok/local discovery",
      asset: "simple-daggerheart-story",
      ctaLink: LINKS.event,
      status: "draft",
      notes: "User will provide music. Use image as still/slow zoom.",
      platforms: {
        tiktok: [
          {
            label: "Caption",
            caption: `Daggerheart one-shot in Chandler. Beginner-friendly, premade heroes, rules taught at the table. July 7 at Mox Boarding House Chandler.\n\nDetails: ${LINKS.event}`,
            hashtags: tags.tiktok
          }
        ],
        instagram: [
          {
            label: "Reel/story caption",
            caption: `Daggerheart one-shot. Beginner-friendly. July 7 at Mox Boarding House Chandler.\n\nDetails: ${LINKS.event}`,
            hashtags: tags.local
          }
        ]
      }
    },
    {
      id: "p-2026-07-04-light-holiday",
      date: "2026-07-04",
      time: "10:30",
      title: "Light holiday hook",
      pillar: "Soft engagement",
      audience: "Personal network",
      asset: "newcomer-live-fantasy-square",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Keep it light, not sales-heavy. Do not compete with holiday attention.",
      platforms: {
        threads: [
          {
            label: "Low pressure",
            caption: `If your holiday weekend includes imagining a heroic escape from paperwork, I have beginner-friendly Daggerheart tables coming up in Chandler.\n\nCurrent event options: ${LINKS.events}`,
            hashtags: ["#TTRPG"]
          }
        ],
        bluesky: [
          {
            label: "Low pressure",
            caption: `Beginner-friendly Daggerheart in Chandler: premade heroes, rules taught at the table, paperwork only fictional.\n\n${LINKS.events}`,
            hashtags: ["#Daggerheart", "#TTRPG"]
          }
        ],
        x: [
          {
            label: "Short",
            caption: `Beginner-friendly Daggerheart in Chandler. Premade heroes, rules taught at the table. ${LINKS.events}`,
            hashtags: ["#Daggerheart"]
          }
        ]
      }
    },
    {
      id: "p-2026-07-05-48-hours",
      date: "2026-07-05",
      time: "16:00",
      title: "48-hour July 7 reminder",
      pillar: "Date-specific",
      audience: "Local",
      asset: "july7-ai-square",
      ctaLink: LINKS.event,
      status: "draft",
      notes: "Check seats before posting. If full, convert to waitlist or next-date language.",
      platforms: {
        instagram: [
          {
            label: "48 hours",
            caption: `Two days out: Peril to Profit runs Tuesday, July 7 at Mox Boarding House Chandler.\n\nBeginner-friendly Daggerheart. Premade heroes. Rules taught at the table. Suspicious crate included at no extra emotional cost.\n\nDetails: ${LINKS.event}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "48 hours",
            caption: `Two days until Peril to Profit at Mox Boarding House Chandler.\n\nIf you have wanted to try Daggerheart without buying the book or building a character first, this table is built for that. If you have never played a tabletop RPG before, it is also built for that.\n\nDetails: ${LINKS.event}`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-07-06-tomorrow",
      date: "2026-07-06",
      time: "19:00",
      title: "Tomorrow reminder",
      pillar: "Date-specific",
      audience: "Local",
      asset: "july7-ai-wide",
      ctaLink: LINKS.event,
      status: "draft",
      notes: "Only post if seats remain or waitlist is useful.",
      platforms: {
        instagram: [
          {
            label: "Story text",
            caption: `Tomorrow at Mox Boarding House Chandler:\nPeril to Profit: The Goldspire Messengers\nBeginner-friendly Daggerheart\nPremades provided\nRules taught live\n\nDetails: ${LINKS.event}`,
            hashtags: []
          }
        ],
        facebook: [
          {
            label: "Tomorrow",
            caption: `Tomorrow evening at Mox Boarding House Chandler: beginner-friendly Daggerheart with premade characters and rules taught at the table.\n\nThe contract says deliver the crate. The forest knows better.\n\nDetails: ${LINKS.event}`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-07-07-today",
      date: "2026-07-07",
      time: "10:00",
      title: "Today reminder",
      pillar: "Date-specific",
      audience: "Local",
      asset: "july7-ai-square",
      ctaLink: LINKS.event,
      status: "draft",
      notes: "Morning-of post. Confirm seat status first.",
      platforms: {
        instagram: [
          {
            label: "Today",
            caption: `Today at Mox Boarding House Chandler: Peril to Profit, a beginner-friendly Daggerheart one-shot.\n\nNo experience needed. Premade characters provided. Rules taught at the table.\n\nDetails: ${LINKS.event}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "Today",
            caption: `Today is the first Peril to Profit table at Mox Boarding House Chandler.\n\nBeginner-friendly Daggerheart, premade characters, rules taught at the table. If you are joining us: bring yourself, maybe bring a water bottle, and prepare to trust no paperwork.\n\nDetails: ${LINKS.event}`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-07-07-thank-you",
      date: "2026-07-07",
      time: "21:30",
      title: "Post-table thank-you template",
      pillar: "Community building",
      audience: "Players and observers",
      asset: "evergreen-find-table-square",
      ctaLink: LINKS.events,
      status: "needs_edit",
      notes: "Edit after the table. Do not invent outcomes; use real table-safe moments only.",
      platforms: {
        facebook: [
          {
            label: "After table",
            caption: `Huge thanks to tonight's table at Mox Boarding House Chandler.\n\n[ADD ONE SAFE, NON-SPOILER TABLE MOMENT HERE]\n\nI am planning more beginner-friendly Daggerheart one-shots. Current event options will live here: ${LINKS.events}`,
            hashtags: []
          }
        ],
        instagram: [
          {
            label: "After table",
            caption: `First table in the books.\n\n[ADD ONE SAFE, NON-SPOILER TABLE MOMENT HERE]\n\nMore beginner-friendly Daggerheart dates will live here: ${LINKS.events}`,
            hashtags: tags.local
          }
        ],
        threads: [
          {
            label: "After table",
            caption: `Tonight's Daggerheart table at Mox Chandler: [ADD ONE SAFE NON-SPOILER MOMENT].\n\nMore beginner-friendly tables: ${LINKS.events}`,
            hashtags: ["#Daggerheart"]
          }
        ]
      }
    },
    {
      id: "p-2026-07-08-evergreen-current-dates",
      date: "2026-07-08",
      time: "17:45",
      title: "Evergreen: see current dates",
      pillar: "Recurring availability",
      audience: "People who missed July 7",
      asset: "evergreen-current-dates-poster",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "This is the first post after July 7. Use actual table outcome if available.",
      platforms: {
        instagram: [
          {
            label: "Recurring",
            caption: `Could not make the last table? Good news: the paperwork has not stopped.\n\nI am keeping beginner-friendly Daggerheart one-shots on the calendar. Check current dates and event options here: ${LINKS.events}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "Recurring",
            caption: `I am planning more beginner-friendly Daggerheart one-shots at Mox Boarding House Chandler.\n\nThese are built for both Daggerheart-curious tabletop players and total newcomers: premade characters, rules taught as we play, no rulebook or prep needed.\n\nCurrent event options: ${LINKS.events}`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-07-10-recurring-daggerheart",
      date: "2026-07-10",
      time: "18:00",
      title: "Recurring Daggerheart curiosity",
      pillar: "Daggerheart curiosity",
      audience: "TTRPG players",
      asset: "simple-daggerheart-square",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Month-agnostic. Good reuse template.",
      platforms: {
        instagram: [
          {
            label: "Direct",
            caption: `Daggerheart-curious?\n\nI am running beginner-friendly one-shots in Chandler. Premade heroes, rules taught at the table, no book required.\n\nSee current dates: ${LINKS.events}`,
            hashtags: tags.local
          }
        ],
        tiktok: [
          {
            label: "Caption",
            caption: `Daggerheart one-shot. Beginner-friendly. Premade heroes. Rules taught at the table. Current dates: ${LINKS.events}`,
            hashtags: tags.tiktok
          }
        ]
      }
    },
    {
      id: "p-2026-07-12-start-here",
      date: "2026-07-12",
      time: "15:00",
      title: "Newcomer start-here post",
      pillar: "No homework",
      audience: "Total newcomers",
      asset: "newcomer-live-fantasy-square",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Evergreen beginner-facing post.",
      platforms: {
        facebook: [
          {
            label: "Start here",
            caption: `If you have heard of tabletop RPGs but never known where to start, this is the kind of table I am building.\n\nNo rulebook. No prep. No pressure to act, do voices, or already know the rhythm of play. You get a premade hero, I teach the rules, and the table figures the story out together.\n\nCurrent beginner-friendly Daggerheart dates: ${LINKS.events}`,
            hashtags: []
          }
        ],
        instagram: [
          {
            label: "Start here",
            caption: `New to tabletop RPGs? Start here.\n\nNo prep. No rulebook. Premade hero. Rules taught live. A friendly fantasy one-shot in Chandler.\n\nCurrent dates: ${LINKS.events}`,
            hashtags: tags.newcomer
          }
        ]
      }
    },
    {
      id: "p-2026-07-14-linkedin-facilitation",
      date: "2026-07-14",
      time: "09:00",
      title: "LinkedIn: facilitation and safety",
      pillar: "Professional process",
      audience: "UX/design/professional network",
      asset: "evergreen-event-options-wide",
      ctaLink: "",
      status: "draft",
      notes: "Professional lens, no hard event CTA.",
      platforms: {
        linkedin: [
          {
            label: "Facilitation",
            caption: `A beginner-friendly tabletop RPG table is a facilitation design problem.\n\nThe host has to manage uncertainty, teach only what matters in the moment, avoid spotlighting anxious participants too early, and create early wins without making the experience feel fake.\n\nThat maps cleanly to product onboarding: reduce initial load, teach in context, make success visible, and do not confuse confidence with prior knowledge.`,
            hashtags: tags.linkedin
          }
        ]
      }
    },
    {
      id: "p-2026-07-16-hope-fear-explainer",
      date: "2026-07-16",
      time: "18:30",
      title: "Hope/Fear dice mini explainer",
      pillar: "Daggerheart curiosity",
      audience: "TTRPG players",
      asset: "simple-try-wide",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Keep lightweight. Avoid rules lecture.",
      platforms: {
        threads: [
          {
            label: "Mini explainer",
            caption: `One thing I like about Daggerheart for one-shots: every roll can tell you more than pass/fail. Hope and Fear give the table a little narrative weather.\n\nBeginner-friendly tables in Chandler: ${LINKS.events}`,
            hashtags: ["#Daggerheart", "#TTRPG"]
          }
        ],
        bluesky: [
          {
            label: "Mini explainer",
            caption: `Daggerheart's Hope/Fear dice are a neat one-shot engine: the roll can move the scene emotionally, not just mechanically.\n\nBeginner-friendly Chandler tables: ${LINKS.events}`,
            hashtags: ["#Daggerheart"]
          }
        ],
        x: [
          {
            label: "Short",
            caption: `Daggerheart's Hope/Fear dice are a fun one-shot engine: every roll can shift the emotional weather. Chandler tables: ${LINKS.events}`,
            hashtags: ["#Daggerheart"]
          }
        ]
      }
    },
    {
      id: "p-2026-07-18-pc-khari",
      date: "2026-07-18",
      time: "12:00",
      title: "PC spotlight: Khari",
      pillar: "Character choice",
      audience: "Character-first players",
      asset: "pc-khari",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Evergreen PC spotlight.",
      platforms: {
        instagram: [
          {
            label: "Khari",
            caption: `Premade hero preview: Khari Nix.\n\nFor when the contract requires diplomacy, but the forest appears to have brought an axe to the meeting.\n\nBeginner-friendly Daggerheart event options: ${LINKS.events}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "Khari",
            caption: `Premade hero preview: Khari Nix.\n\nCharacter options like this are why newcomers do not need to build anything before the table. Pick the hero who makes you say "oh, that one," and we go from there.\n\nCurrent Daggerheart event options: ${LINKS.events}`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-07-20-tiktok-corporate-fantasy",
      date: "2026-07-20",
      time: "17:30",
      title: "TikTok script: corporate fantasy",
      pillar: "Campaign tone",
      audience: "Short video viewers",
      asset: "evergreen-find-table-square",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Can be voiceover over poster with slow zoom.",
      platforms: {
        tiktok: [
          {
            label: "Voiceover script",
            caption: `Script:\nCorporate fantasy is what happens when a magical delivery contract has the emotional energy of a bad workplace email.\n\nYou are hired to deliver a crate. The company insists it is simple. The forest has counter-notes.\n\nI am running beginner-friendly Daggerheart one-shots in Chandler. Premade characters, rules taught at the table, no homework.\n\nCaption: The contract says deliver the crate. The forest knows better. ${LINKS.events}`,
            hashtags: tags.tiktok
          }
        ]
      }
    },
    {
      id: "p-2026-07-22-find-table",
      date: "2026-07-22",
      time: "18:15",
      title: "Find a table CTA",
      pillar: "Recurring availability",
      audience: "Local",
      asset: "evergreen-find-table-square",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Direct evergreen CTA.",
      platforms: {
        instagram: [
          {
            label: "Current dates",
            caption: `Looking for a beginner-friendly Daggerheart table in the Phoenix Valley?\n\nI am running one-shots at Mox Boarding House Chandler. Premade heroes, rules taught live, no system experience needed.\n\nFind current event options: ${LINKS.events}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "Current dates",
            caption: `I am keeping a current list of beginner-friendly Daggerheart one-shot options here: ${LINKS.events}\n\nThese are in-person tables at Mox Boarding House Chandler, designed for both newcomers and tabletop players curious about Daggerheart.`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-07-24-hero-question",
      date: "2026-07-24",
      time: "19:00",
      title: "Audience question: which hero?",
      pillar: "Engagement",
      audience: "Social engagement",
      asset: "pc-varian",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Question post. Ask for comments; do not bury with long lore.",
      platforms: {
        instagram: [
          {
            label: "Question",
            caption: `Which premade hero would you pick for a suspicious delivery job?\n\nThe charming armored professional, the spellcaster with impeccable presentation, the small amphibious chaos option, the axe-forward negotiator, or the archer who has absolutely read the terrain report?\n\nCurrent Daggerheart tables: ${LINKS.events}`,
            hashtags: tags.local
          }
        ],
        threads: [
          {
            label: "Question",
            caption: `For a suspicious fantasy delivery contract, are you choosing charm, magic, chaos, axe, or archer?\n\nBeginner-friendly Daggerheart tables: ${LINKS.events}`,
            hashtags: ["#Daggerheart"]
          }
        ]
      }
    },
    {
      id: "p-2026-07-26-community-permission",
      date: "2026-07-26",
      time: "11:00",
      title: "Community permission post",
      pillar: "Local discovery",
      audience: "Reddit/local groups",
      asset: "evergreen-event-options-wide",
      ctaLink: LINKS.events,
      status: "needs_rule_check",
      notes: "Do not post to Reddit or groups until rules are checked.",
      platforms: {
        reddit: [
          {
            label: "Permission-first",
            caption: `I am local to the Phoenix Valley and running beginner-friendly Daggerheart one-shots at Mox Boarding House Chandler.\n\nBefore I post event details here, are local tabletop event listings welcome in this community, or is there a preferred weekly thread/place for them?`,
            hashtags: []
          }
        ],
        facebook: [
          {
            label: "Group-safe draft",
            caption: `Group-rule check before posting: I am running beginner-friendly Daggerheart one-shots at Mox Boarding House Chandler. Are local tabletop event listings welcome here, or should they go in a specific thread?`,
            hashtags: []
          }
        ]
      }
    },
    {
      id: "p-2026-07-28-linkedin-onboarding",
      date: "2026-07-28",
      time: "09:00",
      title: "LinkedIn: low-pressure onboarding",
      pillar: "Professional process",
      audience: "UX/design/professional network",
      asset: "newcomer-tabletop-square",
      ctaLink: "",
      status: "draft",
      notes: "Use as career/process signal.",
      platforms: {
        linkedin: [
          {
            label: "Onboarding",
            caption: `The most useful onboarding copy often tells people what they do not need.\n\nFor a beginner tabletop RPG event, "no experience needed" is helpful. But the real anxiety reducers are more specific: no rulebook, no character build, no pressure to perform, premade characters provided, rules taught as we play.\n\nThose lines work because they answer the silent objection before it becomes a bounce.`,
            hashtags: tags.linkedin
          }
        ]
      }
    },
    {
      id: "p-2026-07-30-event-options",
      date: "2026-07-30",
      time: "18:15",
      title: "Current event options",
      pillar: "Recurring availability",
      audience: "Local",
      asset: "evergreen-current-dates-poster",
      ctaLink: LINKS.events,
      status: "draft",
      notes: "Month-agnostic. Good to repeat after new dates are added.",
      platforms: {
        instagram: [
          {
            label: "Current options",
            caption: `Beginner-friendly Daggerheart tables are listed here as they go live.\n\nIf you are Daggerheart-curious, tabletop-curious, or just crate-delivery-contract-curious, check current event options: ${LINKS.events}`,
            hashtags: tags.local
          }
        ],
        facebook: [
          {
            label: "Current options",
            caption: `I am using this page as the current list for my in-person tabletop events at Mox Boarding House Chandler.\n\nBeginner-friendly Daggerheart one-shots will be added there as dates are confirmed: ${LINKS.events}`,
            hashtags: []
          }
        ],
        bluesky: [
          {
            label: "Short",
            caption: `Current beginner-friendly Daggerheart event options in Chandler: ${LINKS.events}`,
            hashtags: ["#Daggerheart", "#TTRPG"]
          }
        ]
      }
    },
    {
      id: "p-2026-07-31-month-end",
      date: "2026-07-31",
      time: "16:30",
      title: "Month-end recap/check calendar",
      pillar: "Community building",
      audience: "Personal and local network",
      asset: "evergreen-find-table-square",
      ctaLink: LINKS.events,
      status: "needs_edit",
      notes: "Edit with real July learning. If no table happened after July 7, keep it simple.",
      platforms: {
        facebook: [
          {
            label: "Recap shell",
            caption: `July tabletop note: [ADD REAL NON-SPOILER RECAP OR DELETE THIS SENTENCE].\n\nI am keeping future beginner-friendly Daggerheart options listed here as they are confirmed: ${LINKS.events}`,
            hashtags: []
          }
        ],
        threads: [
          {
            label: "Short shell",
            caption: `Future beginner-friendly Daggerheart tables in Chandler will keep landing here as they are confirmed: ${LINKS.events}`,
            hashtags: ["#Daggerheart"]
          }
        ]
      }
    }
  ];

  window.GOLDSPIRE_SOCIAL_DATA = {
    meta: {
      title: "Goldspire Social Media Calendar",
      dateRange: "June 19-July 31, 2026",
      timezone: "America/Phoenix",
      eventUrl: LINKS.event,
      eventsUrl: LINKS.events
    },
    links: LINKS,
    tags,
    assets,
    templates,
    ads,
    posts
  };
})();

