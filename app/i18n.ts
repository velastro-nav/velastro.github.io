export const translations = {
  en: {
    languageLabel: "Language",
    navLinks: {
      home: "HOME",
      solution: "SOLUTION",
      team: "TEAM",
      contact: "CONTACT US",
    },
    investors: "INVESTORS",
    liveTelemetry: "Live Telemetry",
    stats: ["Precision", "Uptime", "Latency"],
    exploreArchitecture: "Explore Architecture",
    titleText: "THE NEXT GENERATION OF NAVIGATION",
    partnersKicker: "Trusted by Industry Leaders",
    technical: {
      title: "Navigating the resilient future",
      subtitle: "from Earth to deep space.",
      cards: [
        {
          title: "Stronger Singal",
          description:
            "LEO satellites operate much closer to Earth than traditional GNSS, enabling stronger received signals and faster-changing geometry.",
        },
        {
          title: "Multi-Source Resilience",
          description:
            "Our system fuses signals from multiple space and terrestrial RF sources to improve robustness against interference, spoofing, and signal blockage.",
        },
        {
          title: "Built for Autonomy",
          description:
            "Designed for drones, autonomous vehicles, maritime systems, and critical infrastructure that require reliable positioning in complex environments.",
        },
      ],
    },
    contact: {
      heading: "See what our platform delivers:",
      bullets: [
        "A next-generation navigation solution powered by Low Earth Orbit (LEO) satellites",
        "High-reliability positioning in challenging environments like urban canyons",
        "A scalable infrastructure enabling autonomous driving and advanced mobility systems"
      ],
      form: {
        helpLabel: "How we can help you? *",
        firstName: "First Name *",
        lastName: "Last Name *",
        email: "Email Address *",
        phone: "Phone Number",
        submit: "Send Message",
        privacyNote: "*Required fields. We will use your information in accordance with our privacy policy."
      }
    }
  },
  de: {
    languageLabel: "Sprache",
    navLinks: {
      home: "STARTSEITE",
      solution: "LÖSUNG",
      team: "TEAM",
      contact: "KONTAKT",
    },
    investors: "INVESTOREN",
    liveTelemetry: "Live-Telemetrie",
    stats: ["Präzision", "Verfügbarkeit", "Latenz"],
    exploreArchitecture: "ARCHITEKTUR ENTDECKEN",
    titleText: "Die nächste Generation der Navigation",
    partnersKicker: "Vertrauen führender Industriepartner",
    technical: {
      title: "Navigation für eine resiliente Zukunft",
      subtitle: "von der Erde bis in den Weltraum.",
      cards: [
        {
          title: "STÄRKERES SIGNAL",
          description:
            "LEO-Satelliten operieren wesentlich näher an der Erde als herkömmliche GNSS-Systeme, was stärkere Empfangssignale und eine sich rascher verändernde Geometrie ermöglicht.",
        },
        {
          title: "ROBUSTHEIT DURCH MULTI-SOURCING",
          description:
            "Unser System fusioniert Signale aus diversen weltraum- und bodengestützten HF-Quellen, um die Robustheit gegenüber Störungen, Spoofing und Signalblockaden zu erhöhen.",
        },
        {
          title: "ENTWICKELT FÜR AUTONOMIE",
          description:
            "Konzipiert für Drohnen, autonome Fahrzeuge, maritime Systeme sowie kritische Infrastrukturen, die eine zuverlässige Positionsbestimmung in komplexen Umgebungen erfordern.",
        },
      ],
    },
    contact: {
      heading: "Sehen Sie, was unsere Plattform liefert:",
      bullets: [
        "Eine Navigation der nächsten Generation, unterstützt durch Satelliten in niedriger Erdumlaufbahn (LEO)",
        "Hohe Zuverlässigkeit der Positionsbestimmung in anspruchsvollen Umgebungen wie Straßenschluchten",
        "Eine skalierbare Infrastruktur für autonomes Fahren und fortschrittliche Mobilitätssysteme"
      ],
      form: {
        helpLabel: "Wie können wir Ihnen helfen? *",
        firstName: "Vorname *",
        lastName: "Nachname *",
        email: "E-Mail-Adresse *",
        phone: "Telefonnummer",
        submit: "Nachricht senden",
        privacyNote: "*Erforderliche Felder. Wir verwenden Ihre Informationen gemäß unserer Datenschutzrichtlinie."
      }
    }
  },
  cn: {
    languageLabel: "语言",
    navLinks: {
      home: "首页",
      solution: "解决方案",
      team: "团队",
      contact: "联系我们",
    },
    investors: "投资者",
    liveTelemetry: "实时遥测",
    stats: ["精度", "可用性", "延迟"],
    exploreArchitecture: "探索架构",
    titleText: "新一代导航技术",
    partnersKicker: "深受行业领导者信赖",
    technical: {
      title: "驶向更具韧性的未来",
      subtitle: "从地球延伸至深空。",
      cards: [
        {
          title: "更强信号",
          description:
            "LEO 卫星的运行轨道比传统 GNSS 卫星更接近地球，从而能够实现更强的接收信号以及变化更为迅速的几何构型。",
        },
        {
          title: "多源韧性",
          description:
            "我们的系统融合了来自多个空间及地面射频源的信号，以增强针对干扰、欺骗及信号遮挡的鲁棒性。",
        },
        {
          title: "为自动化而生",
          description:
            "专为无人机、自动驾驶车辆、海事系统以及在复杂环境中需要可靠定位的关键基础设施而设计。",
        },
      ],
    },
    contact: {
      heading: "了解我们的平台能提供什么：",
      bullets: [
        "由低地球轨道（LEO）卫星驱动的下一代导航解决方案",
        "在城市峡谷等复杂环境中的高可靠定位",
        "支持自动驾驶和先进出行系统的可扩展基础设施"
      ],
      form: {
        helpLabel: "我们如何能帮助您？ *",
        firstName: "名 *",
        lastName: "姓 *",
        email: "电子邮箱 *",
        phone: "电话号码",
        submit: "发送消息",
        privacyNote: "*为必填项。我们将根据隐私政策使用您的信息。"
      }
    }
  }
} as const;

export type Lang = keyof typeof translations;
