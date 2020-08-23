<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ flatObj.attributes.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Тип недвижимости: {{ flatObj.type }}</h6>
            <hr>
            <p class="card-text">Площадь: {{ flatObj.attributes.area }} {{flatObj.attributes.unit}}</p>
            <p class="card-text">Количество комнат: {{ flatObj.attributes.rooms }}</p>
        </div>
            <div class="card-footer_block">
                <button class="btn btn-lg" :class="{'btn-danger': liked, 'btn-light': !liked}" @click="ChangeLikedList()">
                    <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-heart-fill" :style="{'fill': heartColor }" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </button>
            </div>
        </div>

</template>

<script>
    export default {
        props: ['flatObj', 'flatId'],
        name: "Card",
        data() {
            return {
                liked: false,
                heartColor: 'white'
            }
        },
        methods: {
            isLiked() {
                this.liked = this.$store.state.liked.indexOf(this.flatObj.id) !== -1;
                this.heartColor = this.liked ? 'white' : 'crimson';
            },
            ChangeLikedList() {
                this.$store.commit('changeLiked',[this.flatObj.id,this.liked]);
                this.isLiked();
            }
        },
        created() {
            this.isLiked()
        }
    }
</script>

<style scoped>
    .card-footer_block {
        margin-top: 5px;
        width: inherit;
        height: 70px;
        float: bottom;
        bottom: 0;
    }
    button{
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
</style>