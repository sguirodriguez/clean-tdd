export interface Usecase<InputDto, outputDto> {
    execute(input: InputDto): Promise<outputDto>;
}