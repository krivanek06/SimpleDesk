package rc.bootsecurity.requestModule.ticketModule.enums;

public enum TICKET_TYPE {
    Software("Software"),
    Hardware("Hardware"),
    Server("Server"),
    User("User"),
    Other("Other");

    private final String text;


    TICKET_TYPE(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
