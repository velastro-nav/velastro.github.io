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
    titleText: "THE NEXT LAYER OF NAVIGATION",
    partnersKicker: "Trusted by Industry Leaders",
    technical: {
      title: "Navigating the resilient future",
      subtitle: "from Earth to deep space.",
      cards: [
        {
          title: "Precision Control",
          description:
            "Sub-millimeter accuracy through decentralized satellite networking. Eradicating single points of failure in traditional GNSS architectures.",
        },
        {
          title: "Cryptographic Resilience",
          description:
            "Military-grade anti-spoofing and anti-jamming protocols natively embedded at the hardware layer with quantum-resistant encryption.",
        },
        {
          title: "Deep Space Ready",
          description:
            "Extended operational range designed for cislunar navigation and multi-planetary autonomous fleet management scaling.",
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
    titleText: "DIE NÄCHSTE SCHICHT DER NAVIGATION",
    partnersKicker: "Vertrauen führender Industriepartner",
    technical: {
      title: "Navigation für eine resiliente Zukunft",
      subtitle: "von der Erde bis in den Weltraum.",
      cards: [
        {
          title: "Präzisionssteuerung",
          description:
            "Submillimetergenaue Positionierung durch dezentrale Satellitennetzwerke. Einzelne Ausfallpunkte klassischer GNSS-Architekturen werden vermieden.",
        },
        {
          title: "Kryptografische Resilienz",
          description:
            "Militärische Anti-Spoofing- und Anti-Jamming-Protokolle, nativ auf Hardware-Ebene integriert und mit quantenresistenter Verschlüsselung geschützt.",
        },
        {
          title: "Bereit für den Weltraum",
          description:
            "Erweiterte Reichweite für cislunare Navigation und skalierbares Management autonomer Flotten über mehrere Planeten hinweg.",
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
    titleText: "导航的下一层",
    partnersKicker: "深受行业领导者信赖",
    technical: {
      title: "驶向更具韧性的未来",
      subtitle: "从地球延伸至深空。",
      cards: [
        {
          title: "精准控制",
          description:
            "通过去中心化卫星网络实现亚毫米级精度，消除传统 GNSS 架构中的单点故障风险。",
        },
        {
          title: "加密韧性",
          description:
            "军用级抗欺骗与抗干扰协议原生嵌入硬件层，并采用抗量子加密保护。",
        },
        {
          title: "面向深空",
          description:
            "扩展运行范围，支持地月空间导航与多星球自主舰队管理的规模化部署。",
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
