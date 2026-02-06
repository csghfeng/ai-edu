function App() {
  const quickLinks = [
    { label: 'AI 实验室', href: '#ai-lab' },
    { label: 'Python 课程', href: '#python-course' },
    { label: '课程体系', href: '#course-system' },
    { label: '学习方式', href: '#teaching-mode' },
  ];

  return (
    <main className="min-h-screen">
      <HeroSection quickLinks={quickLinks} />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <CourseCard
            id="ai-lab"
            title="AI 实验室"
            badge="热门入口"
            description="在 AI 实验室里，你可以体验图像识别、小型聊天机器人和智能分类小游戏。每个实验都有步骤提示，5 分钟就能开始。"
            cta="进入 AI 实验室"
            highlight
          />
          <CourseCard
            id="python-course"
            title="趣味 Python 课程"
            badge="零基础友好"
            description="通过动画、游戏和小挑战学习 Python。从变量、循环到函数，边玩边写代码，慢慢搭起你的编程能力。"
            cta="马上学习 Python"
          />
        </div>
      </section>

      <AILabDemo />
      <CourseSystem />
      <TeachingMode />
      <LearningRoadmap />
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
