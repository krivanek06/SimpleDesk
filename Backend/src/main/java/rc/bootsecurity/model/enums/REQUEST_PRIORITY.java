package rc.bootsecurity.model.enums;

public enum REQUEST_PRIORITY {
    SMALL("malá"),
    MEDIUM("stredná"),
    LARGE("vysoká");

    private final String text;


    REQUEST_PRIORITY(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
