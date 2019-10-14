package rc.bootsecurity.model.enums;

public enum APPLICATION {
    SOFTWARE("Software"),
    HARDWARE("Hardware"),
    SERVER("Server"),
    USER("Užívateľ"),
    OTHER("Iné");

    private final String text;


    APPLICATION(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
