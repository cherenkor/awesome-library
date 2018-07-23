<template>
    <div id="content">
      <div id="large-th">
        <div class="container">
          <div id="list-th">
            <div class="book read" v-for="book in getAllUserBooks" :key="book.id">
              <div class="cover">
                <img :src="book.image">
              </div>
              <div class="description">
                <p class="title">{{book.title}}<br>
                  <span class="author">{{book.author}}</span></p>
              </div>
              <add-remove-button :internalStyle="addRemoveBtnStyle" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import AddRemoveButton from "@/components/shared/AddRemoveButton";

export default {
  components: {
    AddRemoveButton
  },
  data() {
    return {
      addRemoveBtnStyle: {
        width: "50px",
        float: "right",
        marginTop: "-40px"
      }
    };
  },
  computed: {
    getAllUserBooks() {
      return this.$store.getters.getAllUserBooks;
    }
  }
};
</script>

<style scoped>
#content {
  font-family: "Markazi Text", serif;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-bottom: 40px;
  padding: 0 30px;
  min-height: 100vh;
}

.container {
  margin: 0 auto;
  max-width: 910px;
}

.choose {
  width: 100%;
  height: 40px;
}
.fa {
  margin-right: 20px;
  font-size: 30px;
  color: gray;
  float: right;
}
/******************************************
Book stuff
*******************************************/

.book {
  display: inline-block;
  width: 230px;
  height: 390px;
  box-shadow: 0 0 20px #aaa;
  margin: 25px;
  padding: 10px 10px 0 10px;
  vertical-align: top;
  transition: height 1s;
}
/* star button */
/* .book:after {
  font-family: FontAwesome;
  content: "\f006";
  font-size: 35px;
  position: relative;
  left: -0.1cm;
  top: -1.6cm;
  float: right;
} */

.cover {
  border: 2px solid gray;
  height: 68%;
  overflow: hidden;
}

.cover img {
  height: 100%;
  width: 100%;
}

.book p {
  margin-top: 12px;
  font-size: 20px;
}

.book .author {
  font-size: 15px;
}
@media (max-width: 941px) {
  .container {
    max-width: 700px;
  }
  .book {
    margin: 49px;
  }
}
@media (max-width: 730px) {
  .book {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
  }
  .cover {
  }
}

/*********************************
other
**********************************/

h1 {
  color: gray;
  text-align: center;
  font-size: 50px;
  margin-bottom: -3px;
}

/**********************************
display change
***********************************/
/*book height smaller, cover opacity, move text onto cover and star too
animate it */
#list-th:target .book {
  height: 100px;
  width: 250px;
  padding: 10px;
  margin: 25px auto 25px auto;
}

#list-th:target .cover {
  width: 246px;
}

#list-th:target img {
  opacity: 0.1;
}

#list-th:target p {
  margin-top: -62px;
  margin-left: 20px;
}
/* remove button? */
#large-th:target .book {
  height: 390px;
}

/***********************************
star animation
***********************************/
/***********************************
zoom on click
***********************************/
</style>