// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();

const showInformation = (state) => ({
  info: () => console.log(state.title, state.description),
});

const lesson = (title, description) => {
  const state = {
    title,
    description
  };

  return {...showInformation(state)};
}

const firstLesson = lesson("Module 17 - Computer Science", "CS for JS");
firstLesson.info();