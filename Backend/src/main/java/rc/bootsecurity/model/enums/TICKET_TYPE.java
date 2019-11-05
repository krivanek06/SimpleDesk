package rc.bootsecurity.model.enums;

public enum TICKET_TYPE {
    SOFTWARE("Software"),
    HARDWARE("Hardware"),
    SERVER("Server"),
    USER("Užívateľ"),
    OTHER("Iné");

    private final String text;


    TICKET_TYPE(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
