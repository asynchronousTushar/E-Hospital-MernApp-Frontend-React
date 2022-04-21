export const ageCalculator = birthDate => {
    const now = new Date();
    const age = Math.abs(new Date(now - new Date(birthDate)).getFullYear() - 1970)

    return age
}