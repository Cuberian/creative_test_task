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
                <button class="btn" :class="{'btn-dark': !isLiked(flatObj.id), 'btn-danger': isLiked(flatObj.id)}">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                isActive: true
        }
        },
        computed: {
            isLiked(id) {
                return !this.$store.dispatch('findLikedFlat',id)
            }
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