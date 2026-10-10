/*
 * 소개, 논문, 경력은 이 파일에서 수정합니다. 설치나 빌드 없이 동작합니다.
 * 소개 문단의 항목은 일반 문자열 또는 { text, url } 링크입니다.
 * 논문은 publications 배열 순서대로 표시됩니다.
 * CV와 함께 최신 연도 우선, 같은 연도에는 제1저자 논문 우선으로 유지합니다.
 */
window.homepage = {
  profile: {
    name: "Hyunho Song",
    portrait: "assets/portrait-trip.jpg",
    bio: [
      ["I am a master's student in the Department of Future Automotive Mobility at Seoul National University, advised by Professor Ayoung Kim in the RPM Robotics Lab."],
      ["My research focuses on state estimation for mobile robots and autonomous vehicles."]
    ],
    links: [
      { label: "Email", url: "mailto:hun1021405@snu.ac.kr" },
      { label: "CV", url: "assets/Hyunho_Song_CV.pdf" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=n4a3MV4AAAAJ&hl=en" },
      { label: "GitHub", url: "https://github.com/Hyunho111" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/hyunho-song-92105334a" }
    ]
  },
  publications: [
    {
      title: "Cross-Spectral Stereo Inertial Odometry",
      authors: ["Seungsang Yun", "Hyunsoo Jang", "Tai Hyoung Rhee", "Hyunho Song", "Hyeonjae Gil", "Ayoung Kim"],
      venue: "IEEE Robotics and Automation Letters (RA-L), 11(9): 10417–10424, 2026",
      links: [
        { label: "Paper", url: "https://rpm.snu.ac.kr/publications/ssyun-2026-ral.pdf" },
        { label: "arXiv", url: "https://arxiv.org/abs/2606.29757" },
        { label: "Code", url: "https://github.com/seungsang07/cross-spectral-stereo-inertial-odometry" }
      ]
    },
    {
      title: "The City that Never Settles: Simulation-based LiDAR Dataset for Long-Term Place Recognition Under Extreme Structural Changes",
      authors: ["Hyunho Song", "Dongjae Lee", "Seunghun Oh", "Minwoo Jung", "Ayoung Kim"],
      venue: "4th Workshop on Future of Construction, ICRA 2025",
      award: "Best Research Award",
      awardUrl: "https://construction-robots.github.io/index2025.html",
      links: [
        { label: "Paper", url: "https://construction-robots.github.io/papers/76.pdf" },
        { label: "arXiv", url: "https://arxiv.org/abs/2505.05076" },
        { label: "Code & Data", url: "https://github.com/Hyunho111/CNS_dataset" }
      ]
    },
    {
      title: "HeRCULES: Heterogeneous Radar Dataset in Complex Urban Environment for Multi-session Radar SLAM",
      authors: ["Hanjun Kim", "Minwoo Jung", "Chiyun Noh", "Sangwoo Jung", "Hyunho Song", "Wooseong Yang", "Hyesu Jang", "Ayoung Kim"],
      venue: "IEEE International Conference on Robotics and Automation (ICRA), 2025",
      links: [
        { label: "Paper", url: "https://rpm.snu.ac.kr/publications/hjkim-2025-icra.pdf" },
        { label: "arXiv", url: "https://arxiv.org/abs/2502.01946" },
        { label: "Dataset", url: "https://sites.google.com/view/herculesdataset/home" }
      ]
    }
  ],
  experiences: [
    {
      date: "Mar. 2025 – Feb. 2027 (expected)",
      title: "M.S. Student in Future Automotive Mobility",
      institution: "Seoul National University",
      description: "Research on robot state estimation."
    },
    {
      date: "Aug. 2026",
      title: "Team Member",
      institution: "29th Roboracer Autonomous Racing Competition (IFAC 2026)",
      description: "Improving localization and obstacle detection software."
    },
    {
      date: "Aug. 2024 – Feb. 2025",
      title: "Research Intern",
      institution: "RPM Robotics Lab, Seoul National University",
      description: "Extrinsic calibration of multi-sensor systems."
    },
    {
      date: "Mar. 2024 – Jun. 2024",
      title: "Intern",
      institution: "HD Hyundai Robotics",
      description: "Engineering support for industrial automation."
    },
    {
      date: "Jan. 2024",
      title: "Intern",
      institution: "ESSYS, Future Mobility Technology Center (FMTC) Consortium",
      description: "Hands-on experience with autonomous driving software."
    },
    {
      date: "Mar. 2017 – Feb. 2025",
      title: "B.S. in Mechanical Engineering",
      institution: "Seoul National University"
    }
  ]
};
