export default {
    registerCoach(context, data) {
        const coach = {
            // id: new Date().toISOString(),
            id: "c3",
            firstName: data.firstName,
            lastName: data.lastName,
            areas: data.areas,
            description: data.description,
            hourlyRate: data.rate,
        }
        
        context.commit('registerCoach', coach)
    }
}
