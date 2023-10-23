const link1 = {
  id: 'link-id-1',
  name: '개발자 로드맵 모음집',
  url: 'https://roadmap.sh/',
  description:
    '개발자 진로에 따라 따라갈 수 있는 로드맵들을 모아놓은 웹사이트입니다.',
};

const link2 = {
  id: 'link-id-2',
  name: 'UX의 법칙',
  url: 'https://lawsofux.com/',
  description:
    '훌륭한 UX를 만들기 위해 지켜야 하는 여러 가지 법칙을 모아놓은 웹사이트입니다.',
};

const link3 = {
  id: 'link-id-3',
  name: '컴포넌트를 분리하는 기준과 방법',
  url: 'https://medium.com/@shinbaek89/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EB%B6%84%EB%A6%AC%ED%95%98%EB%8A%94-%EA%B8%B0%EC%A4%80%EA%B3%BC-%EB%B0%A9%EB%B2%95-e7cf16bb157a',
  description: 'React 컴포넌트를 잘 작성하기 위한 지식에 대해 이야기합니다.',
};

const link4 = {
  id: 'link-id-4',
  name: 'The Joy of React',
  url: 'https://www.joyofreact.com/',
  description: 'Josh W Comeau의 인터랙티브 React 강의입니다.',
};

const link5 = {
  id: 'link-id-5',
  name: 'Color Hunt',
  url: 'https://colorhunt.co/',
  description: '테마에 따라 색상 팔레트를 모아놓은 웹사이트입니다.',
};

const link6 = {
  id: 'link-id-6',
  name: 'Dribbble Inspiration',
  url: 'https://dribbble.com/shots/popular',
  description: '여러 가지 디자인 포트폴리오를 구경할 수 있습니다.',
};

// ---

const bundle1 = {
  id: 'bundle-id-1',
  userId: 'clnu13hdh00005qlg8vjbswyd',
  name: '프로그래밍',
  links: [link1, link2, link3, link4],
};

const bundle2 = {
  id: 'bundle-id-2',
  userId: 'clnu13hdh00005qlg8vjbswyd',
  name: '디자인',
  links: [link5, link6],
};

const data = {
  bundles: [bundle1, bundle2],
  users: ['user-id-1', 'user-id-2', 'clnu13hdh00005qlg8vjbswyd'],
};

export async function checkUserId(id: string) {
  return data.users.includes(id);
}

export async function getSlugsOfBundles(id: string) {
  // Replace with API call later
  const bundles = data.bundles.filter((b) => b.userId === id);

  const slugs = bundles.map((b) => {
    const { id, name } = b;

    return { id, name };
  });

  return slugs;
}

export async function getBundle(id: string) {
  // Replace with API call later
  const bundle = data.bundles.find((b) => b.id === id);

  return bundle;
}
