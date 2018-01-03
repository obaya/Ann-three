<template>
    <div>
        <datagrid api="http://localhost:88/student.php" :filter="filter"></datagrid>
        
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue';

    export default{
        data:function(){
            return{
                filter:['imgurl','sImgurl','bPrice','size']
            }
        },
        components: {
            datagrid
        }
    }
</script>
