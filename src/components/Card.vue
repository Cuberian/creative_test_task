<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ flatObj.attributes.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Тип недвижимости: {{ flatObj.type }}</h6>
            <hr>
            <p class="card-text">Площадь: {{ flatObj.attributes.area }} {{flatObj.attributes.unit}}</p>
            <p class="card-text">Количество комнат: {{ flatObj.attributes.rooms }}</p>
            <template v-if="showMore">
                <hr>
                <p class="card-text">Адрес: {{ concatAddress }}</p>
                <hr>
                <p class="card-text">{{ detectRelType }}:  {{ concatAgentName }}</p>
            </template>
        </div>

        <div class="card-footer_block">
            <button class="btn btn-lg btn-primary" id="moreButton" @click="showMore=!showMore">
                {{buttonText}}
            </button>
            <button class="btn btn-lg" :class="{'btn-danger': liked, 'btn-light': !liked}" @click="ChangeLikedList()" id="likeButton">
                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-heart-fill" :style="{'fill': heartColor }" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </button>
        </div>

    </div>

</template>

<script>
    export default {
        props: ['flatObj'],
        name: "Card",
        data() {
            return {
                liked: false,
                heartColor: 'white',
                showMore: false
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
        computed: {
            buttonText() {
                return this.showMore ? 'Меньше': 'Больше';
            },
            detectRelType() {
                return this.flatObj.relationships.type ==='agent' ? 'Агент по продаже' : 'Собственник';
            },
            concatAddress() {
                let address = '';
                let addressObj = this.flatObj.attributes.address;
                for (let key in addressObj) {
                    address += addressObj[key]+ ', ';
                }
                return address.substr(0,address.length-2);
            },
            concatAgentName() {
                let agentName = '';
                let agentNameObj = this.flatObj.relationships.attributes;
                for (let key in agentNameObj) {
                    agentName += agentNameObj[key]+ ' ';
                }
                return agentName;
            }
        },
        created() {
            setTimeout(()=>{
            this.isLiked();
            },1000);
        },
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
    #likeButton{
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
    #moreButton{
        position: absolute;
        left: 10px;
        bottom: 10px;
    }
    .card {
        width: 18rem;
        align-items: flex-start;
        min-height: 300px;
        min-width: 250px;
    }
</style>