export function generateSlug(text: string): string {
    return text
        .normalize('NFD')                    // Normaliza para decompor os caracteres acentuados em sua forma básica
        .replace(/[\u0300-\u036f]/g, '')    // Remove os diacríticos
        .toLowerCase()                      // Converte para minúsculas
        .replace(/[^\w\s-]/g, '')           // Remove caracteres não alfanuméricos exceto espaço e traço
        .replace(/\s+/g, '-')               // Substitui espaços por traços
        .replace(/^-+/g, '')                // Remove traços do início
        .replace(/-+$/g, '');               // Remove traços do final
}
