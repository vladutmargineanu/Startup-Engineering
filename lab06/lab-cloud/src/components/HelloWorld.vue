<template>
  <div class="container">
    <h1 class="my-3">CS Courses Catalog</h1>
    <table class="table text-left">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Course</th>
          <th scope="col">Lecturer</th>
          <th scope="col" class="text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course, idx) in courses" :key="idx">
          <th scope="row">{{ idx + 1 }}</th>
          <td>{{ course.name }}</td>
          <td>{{ course.lecturer }}</td>
          <td class="text-right">
            <button
              title="Delete course"
              class="btn btn-danger"
              v-on:click="deleteCourse(course.id)"
            >
              x
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <span class="text-secondary">{{ courses.length + 1 }}</span>
          </td>
          <td>
            <input
              type="text"
              v-model="name"
              placeholder="Course name"
              class="form-control"
            />
          </td>
          <td>
            <input
              type="text"
              v-model="lecturer"
              placeholder="Lecturer name"
              class="form-control"
            />
          </td>
          <td class="text-right">
            <button
              title="Add course"
              class="btn btn-success"
              v-on:click="addCourse()"
              :disabled="!name || !lecturer"
            >
              +
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { db } from "../main"; // notice the firebase database connection import

export default {
  name: "HelloWorld",
  data() {
    // here we provide the initial values for our data model: courses, name, lecturer
    return {
      courses: [], // list of course objects
      name: "", // course name form field
      lecturer: "" // lecturer name form field
    };
  },
  firestore() {
    // this method will get called automatically by VueFire in order to update the courses property of our data model
    return {
      courses: db.collection("courses").orderBy("createdAt")
    };
  },
  methods: {
    addCourse() {
      // method to add a new course to our Firebase collection
      db.collection("courses").add({
        name: this.name,
        lecturer: this.lecturer,
        createdAt: new Date()
      });
      this.name = "";
      this.lecturer = "";
    },
    deleteCourse(id) {
      // method that deletes a course from our Firebase collection by id
      db.collection("courses")
        .doc(id)
        .delete();
    }
  }
};
</script>
