// import courses from "./Data/courses";
// import CourseCard from "./components/CourseCard";
// import CategoryCard from "./components/CategoryCard";

export default function Home() {
  const categories = ["Web Development", "Data Science", "Design", "Business", "AI/ML"];

  return (
    <div>
     
      <div className="bg-blue-600 text-white text-center p-10">
        <h1 className="text-3xl font-bold">Learn Anytime, Anywhere</h1>
        <p>Explore 100+ online courses and boost your skills</p>
      </div>

      
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>

   
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat, i) => (
            <CategoryCard key={i} name={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
