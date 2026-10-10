Hyunho Song — Personal Homepage

미리보기
  index.html을 브라우저로 열면 됩니다. 설치나 빌드가 필요 없습니다.
  Python이 있다면 폴더 안에서 다음 명령으로 로컬 미리보기도 가능합니다.
  python3 -m http.server 8765
  주소: http://127.0.0.1:8765

내용 수정
  content.js    이름, 소개, 연락처, 논문 목록, Experiences
  styles.css    색상, 글꼴, 간격, 모바일 배치
  index.html    페이지 구조와 검색 결과용 설명
  site.js       content.js의 내용을 화면에 표시
  assets/Hyunho_Song_CV.pdf   홈페이지 CV 링크에서 열리는 최신 CV
  assets/portrait-trip.jpg    사용자가 제공한 프로필 사진 원본
  사진은 원본을 유지하고 styles.css의 .portrait-crop에서 표시 영역만 잘랐습니다.
  얼굴·상반신과 물가 배경을 담은 정사각형 구도입니다.

논문 추가
  content.js의 publications 배열에 기존 항목과 같은 형식으로 추가합니다.
  title, authors, venue, links는 필수입니다.
  status와 award / awardUrl은 필요할 때만 입력합니다.
  논문은 배열의 순서대로 표시되며 본인 이름은 자동으로 굵게 표시됩니다.
  CV와 홈페이지 모두 최신 연도 우선, 같은 연도에는 제1저자 논문 우선으로 정렬합니다.
  현재 순서: CSSIO (2026) → CNS (2025) → HeRCULES (2025).

Experiences 수정
  content.js의 experiences 배열에서 date, title, institution을 수정합니다.
  url은 기관 링크가 필요할 때만 추가합니다.
  description은 해당 경험을 한 줄로 설명할 때 추가합니다.

배포
  GitHub Pages 저장소의 루트에 이 폴더의 내용을 올리면 됩니다.
  공개 주소: https://hyunho111.github.io/
  상단 링크 순서: Email → CV → Google Scholar → GitHub → LinkedIn.
  CV를 갱신할 때 assets/Hyunho_Song_CV.pdf도 최신 파일로 교체합니다.

참고한 디자인
  Chiyun Noh의 개인 홈페이지와 공개 저장소를 적극 참고해 새로 구현했습니다.
  https://chiyunnoh.github.io/
  https://github.com/ChiyunNoh/ChiyunNoh.github.io
  960px 본문 폭, 소개 영역과 오른쪽 사진, 텍스트 중심의 논문 카드와 Experiences 타임라인.
  색상은 사용자가 지정한 Tesla 팔레트를 적용했습니다.
  https://getdesign.md/tesla/design-md
  White #FFFFFF / Light Ash #F4F4F4 / Carbon Dark #171A20
  Graphite #393C41 / Pewter #5C5E62 / Electric Blue #3E6AE1
  Cloud Gray #EEEEEE / Pale Silver #D0D1D2

내용 출처
  프로필 사진: 사용자가 제공한 IMG_6816.JPG
  인턴 경력과 LinkedIn 링크: 사용자가 제공한 정보
  연구·인턴 설명: 사용자가 제공한 '자소서 서류.txt' 원문
  소속과 논문: https://rpm.snu.ac.kr/
  Cross-Spectral Stereo Inertial Odometry: RPM 공개 논문 PDF 및 공식 코드 저장소의 서지정보
  https://github.com/seungsang07/cross-spectral-stereo-inertial-odometry
  논문 아래 Code는 해당 논문의 구현 자료 링크이며 개인의 코드 작성 기여를 뜻하지 않습니다.
  HeRCULES: RPM 공개 논문 목록과 공개 데이터셋 페이지
  The City that Never Settles: ICRA 2025 Future of Construction 워크숍 및 논문
  수상 표기는 공식 워크숍의 Best Research Award 표기를 따랐습니다.
  이메일은 공개 논문에 기재된 주소입니다.
