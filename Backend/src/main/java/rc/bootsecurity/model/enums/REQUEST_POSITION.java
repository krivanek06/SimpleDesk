package rc.bootsecurity.model.enums;

public enum REQUEST_POSITION {
    CREATED("Position1"),
    IN_PROGRESS("Position2"),
    CLOSED("Position3");

    private final String text;


    REQUEST_POSITION(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
