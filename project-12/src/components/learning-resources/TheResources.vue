<template>
    <div>
        <base-card>
            <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourcesMode">Stored Resources</base-button>
            <base-button @click="setSelectedTab('add-resources')" :mode="addResButtonMode">Add Resources</base-button>
        </base-card>
    <keep-alive>

        <component :is="selectedTab"></component>
    </keep-alive>
    </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
    components: {
        StoredResources,
        AddResources
    },
    provide() {
        return {
            resources: this.storedResources,
            addResources: this.addResources
        }
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation',
                    link: 'https://vuejs.org' 
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google',
                    link: 'https://google.org'
                }
            ]
        }
    },
    computed: {
        storedResourcesMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resources' ? null : 'flat'
        }

    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        }, 
        addResources(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            }

            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
    }
}
</script>