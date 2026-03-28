// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "algorithm-repository-for-embedded",
		title: "Algorithm Repository for Embedded",
		description:
			"嵌入式系统常用算法库，包含排序、查找、数据结构等基础算法的C语言实现，针对资源受限环境优化。",
		image: "",
		category: "other",
		techStack: ["C", "Embedded", "Algorithm"],
		status: "in-progress",
		sourceCode: "https://github.com/LIUXURUXUE/ALGORITHM-REPOSITORY-FOR-EMBEDDED",
		startDate: "2026-03-01",
		tags: ["Embedded", "Algorithm", "C"],
	},
	{
		id: "tools-repository-for-embedded",
		title: "Tools Repository for Embedded",
		description:
			"嵌入式开发工具集，包含Keil自动编译工具、代码生成器等Python脚本，提升嵌入式开发效率。",
		image: "",
		category: "other",
		techStack: ["Python", "Batchfile", "Keil", "Automation"],
		status: "in-progress",
		sourceCode: "https://github.com/LIUXURUXUE/TOOLS-REPOSITORY-FOR-EMBEDDED",
		startDate: "2026-03-01",
		tags: ["Embedded", "Tools", "Python", "Automation"],
	},
	{
		id: "narcissus-blog",
		title: "Narcissus Blog",
		description:
			"基于 Astro 框架的现代化博客主题，支持多语言、暗色模式和响应式设计。",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		sourceCode: "https://github.com/LIUXURUXUE/Narcissus-blog",
		startDate: "2025-01-01",
		featured: true,
		tags: ["Blog", "Theme", "Open Source"],
	},
	{
		id: "chrome-extension-study-log",
		title: "Chrome Extension Study Log",
		description:
			"一个简化英语学习的浏览器扩展，使用仿生阅读和文本替换技术。可能还涉及 AI 进行单词含义匹配。",
		image: "",
		category: "web",
		techStack: ["JavaScript", "Chrome Extension API"],
		status: "in-progress",
		sourceCode: "https://github.com/LIUXURUXUE/chrome-extension-study-log",
		startDate: "2025-01-01",
		tags: ["Extension", "Learning", "English"],
	},
	{
		id: "auto-title",
		title: "Auto Title",
		description:
			"使用自动化文本绑定批量刷新 Figma 组件实例属性。",
		image: "",
		category: "web",
		techStack: ["HTML", "JavaScript", "Figma Plugin API"],
		status: "in-progress",
		sourceCode: "https://github.com/LIUXURUXUE/Auto-Title",
		startDate: "2024-06-01",
		featured: true,
		tags: ["Figma", "Productivity", "Automation"],
	},
	{
		id: "astraui-windows-emulator",
		title: "AstraUI Windows Emulator",
		description:
			"AstraUI Windows 模拟器，模拟 Windows 操作系统界面。",
		image: "",
		category: "desktop",
		techStack: ["C++", "Qt"],
		status: "in-progress",
		sourceCode: "https://github.com/LIUXURUXUE/AstraUI-windows-emulator",
		startDate: "2024-09-01",
		tags: ["Desktop", "Emulator", "C++"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
