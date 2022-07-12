const postedBy = async (parent, _, context) => {
    return await context.prisma.link.findUnique({ where: { id: parent.id } }).postedBy()
}

const votes = (parent, _, context) => {
    return context.prisma.link.findUnique({ where: { id: parent.id } }).votes()
}

module.exports = {
    postedBy,
    votes
}