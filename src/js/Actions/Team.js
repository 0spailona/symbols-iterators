export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Вы не можете добавить персонажа дважды');
        } else {
            this.members.add(character);
        }
    }

    addAll(...arrMembers) {
        for (const member of arrMembers) {
            this.members.add(member);
        }
    }

    toArray() {
        const arrMembers = [];
        this.members.forEach((member) => arrMembers.push(member));
        return arrMembers.sort();
    }

    getIterator() {
        let currentIndex = 0;
        const members = this.toArray();

        return {
            next() {
                if (currentIndex >= members.length) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
                return {
                    value: members[currentIndex++],
                    done: false
                }
            }
        }
    }
}

